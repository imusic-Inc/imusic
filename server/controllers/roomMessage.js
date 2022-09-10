const hookAsync = require("../utils/hookAsync");
const Message = require('../models/chatMessages');
const sessionModel = require("../models/sessionRoom");
const AppError = require("../utils/appError");
const factory = require('../controllers/handlerFactory')

exports.getAllMessages = factory.getAll(Message)



exports.createMessage = hookAsync(async(req, res, next) => {

    //codes below for nested routes to create message in session room
    if (!req.body.session) req.body.session = req.params.sessionId //session id will come from url instead of the body
    if (!req.body.user) req.body.user = req.user.id;


    if (req.params.sessionId) {
        const session = await sessionModel.findOne({ _id: req.params.sessionId });


        //only joined user as a member of room can create messages on this route
        if (session.participants.filter((user) => JSON.stringify(user._id) === JSON.stringify(req.user.id)).length === 0) {
            return next(new AppError('You do not have permission to perform this action, join music room before taking this action', 403));
        }

    }


    const newMessage = await Message.create(req.body)


    res.status(201).json({
        status: 'success',
        // results: newMessage.length,
        data: {
            newMessage
        }

    });



});