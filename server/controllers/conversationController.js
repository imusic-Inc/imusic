const Conversation = require("../models/PrivateConversation");
const APIFeatures = require("../utils/apiFeatures");
const hookAsync = require("../utils/hookAsync");


exports.viewAllConversations = hookAsync(async(req, res, next) => {

    const features = new APIFeatures(Conversation.find(), req.query)
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


exports.createConversation = hookAsync(async(req, res, next) => {

    const newConversation = new Conversation({
        members: [req.body.senderId, req.body.recieverId]
    })

    const savedConservation = await newConversation.save();
    res.status(201).json(savedConservation);

});


exports.getUserConversation = hookAsync(async(req, res, next) => {
    const conversation = await Conversation.find({
        members: { $in: [req.params.userId] },
    }).populate('messages')

    res.status(200).json(conversation);

});