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
    //console.log(req.user);
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


    const session = await query.populate('messages')


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

    console.log(req.cookies);
    let session = await sessionModel.findOne({ _id: req.params.id });


    if (!session) {
        return next(new AppError('No music room found with that ID', 404))
    }


    if (!req.user) { // join in a public room without sigining up
        let _id = 'ieowoeoweowe'
            //console.log(req.user.id);
        if (session.guest.filter((user) => JSON.stringify(user._id) === JSON.stringify(_id)).length === 0) {
            session.guest.push({
                _id: _id,
                name: "guest user"
            })
            await session.save();

        }

        res.status(200).json({
            status: `you've joined the ${session.name} room as a guest user`,
        });

    } else { // join a room with an account


        if (JSON.stringify(session.ownerId) === JSON.stringify(req.user._id)) { //user is creator of music room
            res.status(200).json({
                status: `you've joined the ${session.name} room as the group admin`
            });
        } else if (session.participants.filter((user) => JSON.stringify(user._id) === JSON.stringify(req.user._id)).length === 0) { //check if user is already a member 

            session.participants.push(req.user._id)
            session.save();

            res.status(200).json({
                status: `you've joined thse ${session.name} room as ${req.user.name}`
            });
        } else {
            res.status(200).json({
                status: `you've joined the ${session.name} room as ${req.user.name}` //will be refactored later to follow dry pricinciple
            });
        }

    }

});