const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//schema model
const sessionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    roomType: {
        type: String,
        required: true,
        enum: ['public', 'private'],
        default: 'public',
    },
    ownerId: { type: Schema.Types.ObjectId, ref: 'User' },

    participants: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }, ],
        required: false,
    },
    role: {
        type: String,
        enum: ['room-admin'],
        default: 'room-admin'
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});


sessionSchema.pre(/^find/, function(next) {

    this.populate({
        path: 'participants',
        select: 'name'
    });

    next()
});
const Session = mongoose.model('Session', sessionSchema);


module.exports = Session;