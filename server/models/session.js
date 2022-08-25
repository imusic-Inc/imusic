const mongoose = require('mongoose')


//schema model
const sessionSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),

    },
    name: {
        type: String,
        required: [true, "a session must have a name"]
    },

    participants: Number,

    description: {
        type: String,
        required: [true, "a session must have a description"]
    },
    genres: String,

    private: {
        type: Boolean,
        default: false
    }

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});






const Session = mongoose.model('Session', sessionSchema);


module.exports = Session;