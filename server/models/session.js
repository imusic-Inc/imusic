const mongoose = require('mongoose')


//schema model
const sessionSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now(),

    },
    // groupAdminId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: {
        type: String,
        required: [true, "a session must have a name"]
    },

    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

    description: {
        type: String,
        required: [true, "a session must have a description"]
    },
    genres: String,

    private: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['member', 'session-admin'],
        default: 'session-admin'
    },

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

sessionSchema.pre(/save|create/g, function(next) {
    if (!this.participants) {
        next();
    }
    this.users = this.users.map((user) => {
        return (user.avatar = `https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff&size=40`);
    });

    next();
});



const Session = mongoose.model('Session', sessionSchema);


module.exports = Session;