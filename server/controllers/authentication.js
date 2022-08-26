const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require("./../models/userModel");
const hookAsync = require("../utils/hookAsync");
const AppError = require('../utils/appError');

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}


//create a user in our database
exports.signup = hookAsync(async(req, res, next) => {

    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    });

    const token = signToken(newUser._id)
    res.status(201).json({
        status: 'success',
        token,
        data: {
            user: newUser
        }

    })

});








exports.login = hookAsync(async(req, res, next) => {

    const { email, password } = req.body;

    //1) check if email and password exist
    if (!email || !password) {
        return next(new AppError('Please provide email or password!', 401)); //401 which means unauthoried
    }


    //2) check if user exists && password is correct
    const user = await User.findOne({ email }).select('+password');



    if (!user || !(await user.correctPassword(password, user.password))) {
        return next(new AppError('Incorrect email or password', 401))
    }


    //3) If everything is okay, send token to client
    const token = signToken(user._id)

    res.status(200).json({
        status: 'success',
        token

    })

});



exports.protect = hookAsync(async(req, res, next) => {
    //1)Getting token and if it exist
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        token = req.headers.authorization.split(' ')[1];


    }


    if (!token) {
        return next(new AppError('You are not logged in to get access.', 401))
    }

    //2)verification token

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    //console.log(decoded);
    //3) Check if user still exists


    const currentUser = await User.findById(decoded.id) //check id from payload
    if (!currentUser) {
        return next(new AppError('The user belonging to this token does no longer exist', 401))
    }

    //4)Check if use changed password after the token was issued


    if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next(new AppError('User recently changed password! Please log in again', 401));
    }

    //Grant access to protected route
    req.user = currentUser;

    next()
})