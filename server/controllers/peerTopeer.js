const Message = require("../models/PrivateMessage");
const hookAsync = require("../utils/hookAsync");


exports.getAllPrivateMessages = hookAsync(async(req, res, next) => {
    const messages = await Message.find()


    res.status(200).json({
        status: 'success',
        results: messages.length,
        data: {
            messages
        }

    });



});

exports.getPrivateMessageById = hookAsync(async(req, res, next) => {

    let query = Message.findById(req.params.id)


    const message = await query.populate('messages')


    if (!message) {
        return next(new AppError('No no messages found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            message
        }

    });

});




exports.createMessage = hookAsync(async(req, res, next) => {

    //codes below for nested routes to create message in session room
    if (!req.body.conversation) req.body.conversation = req.params.conversationId //session id will come from url instead of the body
    if (!req.body.user) req.body.user = req.user.id;


    // if (req.params.senderId) {
    //     const conversation = await Message.findOne({ _id: req.params.senderId });


    //     //only joined user as a member of room can create messages on this route
    //     if (session.participants.filter((user) => JSON.stringify(user._id) === JSON.stringify(req.user.id)).length === 0) {
    //         return next(new AppError('You do not have permission to perform this action, join music room before taking this action', 403));
    //     }

    // }


    const newMessage = await Message.create(req.body)


    res.status(201).json({
        status: 'success',
        // results: newMessage.length,
        data: {
            newMessage
        }

    });



});