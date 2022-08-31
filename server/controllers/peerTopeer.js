const Message = require("../models/PrivateMessage");
const hookAsync = require("../utils/hookAsync");
const { getAllMessages } = require("./roomMessage");



exports.getMessages = hookAsync(async(req, res, next) => {

    const messages = await Message.find({
        conversationId: req.params.conversationId
    })
    res.status(200).json(messages);
});


exports.createMessage = hookAsync(async(req, res, next) => {
    const newMessage = new Message(req.body)
    const savedMessage = await newMessage.save()
    res.status(200).json(savedMessage);


});