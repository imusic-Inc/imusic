const mongoose = require("mongoose");

const PrivateMessageSchema = mongoose.Schema({
    conversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    receiverId: {
        type: String
    },
    text: {
        type: String
    },
}, {
    timestamps: true,
});

const PrivateMessage = mongoose.model("PrivateMessage", PrivateMessageSchema);

module.exports = PrivateMessage;