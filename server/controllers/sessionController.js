const APIFeatures = require('../utils/apiFeatures');
const Session = require('../models/sessionRoom');
const sessionModel = require('../models/sessionRoom');
const hookAsync = require('./../utils/hookAsync');
const AppError = require('../utils/appError');

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
    console.log(req.user);
    const { name, description, roomType } = req.body;

    const session = await Session.create({ name, description, roomType, ownerId: req.user._id })

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












exports.deleteSession = hookAsync(async(req, res, next) => {
    const getRole = await sessionModel.findOne({ _id: req.params.id });
    //console.log(getRole);
    //const doc = await Model.findByIdAndDelete(req.params.id);

    if (getRole && (getRole.role === 'room-admin') && (JSON.stringify(getRole.ownerId) === JSON.stringify(req.user._id))) {
        const doc = await sessionModel.findByIdAndDelete(req.params.id); //only delete group with group-admin function
        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }
    } else {
        return next(new AppError('You do not have permission to perform this action', 403));
    }


    res.status(204).json({
        status: 'success',
        data: null
    });

});




exports.joinRoomSession = hookAsync(async(req, res, next) => {
    // console.log(req.user);
    let session = await sessionModel.findOne({ _id: req.params.id });


    if (!(session.participants.map((user) => user._id === req.user._id))) {
        session.participants.push(req.user._id)
        session.save();
    }

    res.status(204).json({
        status: 'success',
        data: session
    });

});