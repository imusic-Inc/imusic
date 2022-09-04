const mongoose = require("mongoose");


const PrivateMessageSchema = mongoose.Schema({
    message: {
        type: String,
        required: [true, 'message can not be empty!']
    },
    conversation: {
        type: mongoose.Schema.ObjectId,
        ref: 'Conversation',
        required: [true, 'message must belong to a conversation']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'message must belong to a user']
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

//parent  referencing




PrivateMessageSchema.pre(/^find/, function(next) {

    this.populate({
        path: 'user',
        select: 'name photo'
    });

    next()
});



module.exports = PrivateMessage = mongoose.model('PrivateMessage', PrivateMessageSchema);