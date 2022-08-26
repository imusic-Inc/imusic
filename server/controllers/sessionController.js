const APIFeatures = require('../utils/apiFeatures');
const Session = require('./../models/session');
const sessionModel = require('./../models/session');
const hookAsync = require('./../utils/hookAsync');

exports.viewAllSessionRooms = hookAsync(async(req, res, next) => {

    const features = new APIFeatures(sessionModel.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
    const session = await features.query;

    res.status(200).json({
        status: 'success',
        results: session.length,
        data: {
            session
        }

    });


})


exports.createSession = hookAsync(async(req, res, next) => {

    const { name, description, genres, private } = req.body;

    const session = await Session.create({ name, description, genres, private })

    res.status(201).json({
        status: 'success',
        data: {
            session
        }
    });


})

exports.getSessionById = hookAsync(async(req, res, next) => {

    let query = Session.findById(req.params.id)


    const session = await query;


    if (!session) {
        return next(new AppError('No music room found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            session
        }

    });

});












exports.joinSessionRoom = hookAsync(async(req, res, next) => {

    const { sessionId, userId } = req.body;
    let result = await session.findOne({ _id: sessionId })

    result.activeUsers.push(userId);
    result.save();
    res.send("user joined session")

    res.status(200).json({
        status: 'success',
        data: {
            session
        }

    });

});