const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConversationSchema = new mongoose.Schema({
    members: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }, ],
        required: false,
    },

}, { timestamps: true })


//Virtual populate(two way ref for privateMessages)
ConversationSchema.virtual('messages', {
    ref: 'PrivateMessage',
    foreignField: 'conversation', //referencing the session ids on Message model
    localField: '_id'



});


ConversationSchema.pre(/^find/, function(next) { //populate participants field with selected credentials added members

    this.populate({
        path: 'members',
        select: ['name', 'email', 'photo'],

    });

    next()
});




const Conversation = mongoose.model("Conversation", ConversationSchema);

module.exports = Conversation;