const Conversation = require("../models/PrivateConversation");
const hookAsync = require("../utils/hookAsync");


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
    })

    res.status(200).json(conversation);

});