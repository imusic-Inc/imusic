const encodeFormData = require('../utils/actions');
const querystring = require('querystring');
const fetch = require('node-fetch')
const got = require('got');
const User = require('../models/userModel');
const { signToken, createSendToken } = require('./authentication');
const hookAsync = require('../utils/hookAsync');
//oauth through spotify api

const SendToken = (user, res) => {
    const token = signToken(user._id);
    const cookieOptions = {

        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),

        httpOnly: true

    }
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    res.cookie('jwt', token, cookieOptions);

    user.password = undefined //remove password from response output

}


exports.login = async(req, res) => {
    const scope =
        `user-read-email
        user-modify-playback-state
    user-read-playback-state
    user-read-currently-playing
    user-library-modify
    user-library-read
    user-top-read
    playlist-read-private
    playlist-modify-public
    streaming
    `;

    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: process.env.CLIENT_ID,
            scope: scope,
            redirect_uri: process.env.REDIRECTURI
        })
    );
}

let isloggedDone = false;
let query;
//gets log user credentials
exports.logged = async(req, res, next) => {

    const body = {
        grant_type: 'authorization_code',
        code: req.query.code,
        redirect_uri: process.env.REDIRECTURI,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
    }

    await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: encodeFormData(body)
        })
        .then(response => response.json())
        .then(data => {
            query = querystring.stringify(data);
            //  console.log('hello', query);


        })
    next()

};

exports.getUser = hookAsync(async(req, res) => {
    let userQuery = query.split('&')[0];
    let { body } = await got(`https://api.spotify.com/v1/me?${userQuery}`, { json: true });

    //extract name,email,photo
    const findUser = await User.find({ email: body.email })

    if (findUser.length === 0) {
        //we store spotify user data in our database
        const newUser = await User.create({
            name: body.display_name,
            email: body.email,
            password: body.id,
            passwordConfirm: body.id
        });

        SendToken(newUser, res)
    } else {
        const user = await User.findOne({ email: body.email }).select('+password');

        if (!user || !(await user.correctPassword(body.id, user.password))) {
            return next(new AppError('Incorrect email or password', 401))
        }

        SendToken(user, res)


    }
})