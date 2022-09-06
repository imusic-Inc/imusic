const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

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
    photo: String,
    participants: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }, ],
        required: false,
    },
    guest: {
        type: Array,
    },
    playlist: {
        type: Array,
    },
    role: {
        type: String,
        enum: ['room-admin'],
        default: 'room-admin'
    },
    lock: {

        type: String,
        minlength: 4,
        select: false

    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});




//Virtual populate(two way ref for chatMessages)

sessionSchema.virtual('messages', {
    ref: 'Message',
    foreignField: 'session', //referencing the session ids on Message model
    localField: '_id'



});


sessionSchema.pre(/^find/, function(next) { //populate participants field with selected credentials added members

    this.populate({
        path: 'participants',
        select: ['name', 'email', 'photo'],

    });

    next()
});




sessionSchema.pre('save', async function(next) {
    if (this.roomType === 'public') {
        this.lock = undefined
        return next()
    } else if (this.roomType === 'private') {

        if (!this.isModified('lock')) return next()

        this.lock = await bcrypt.hash(this.lock, 10);
        next()

    }



})


sessionSchema.methods.correctlock = async function(candidatelock, roomLock) {
    return await bcrypt.compare(candidatelock, roomLock);
}



const Session = mongoose.model('Session', sessionSchema);


module.exports = Session;