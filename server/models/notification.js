const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const NotificationSchema = new Schema({

    userTo: { type: Schema.Types.ObjectId, ref: 'User' },
    userFrom: { type: Schema.Types.ObjectId, ref: 'User' },
    notificationType: String,
    content: String,
    opened: { type: Boolean, default: false },
    entityId: Schema.Types.ObjectId
}, { timestamps: true })


NotificationSchema.statics.insertNotification = async(userTo, userFrom, notificationType, content, entityId) => {
    const data = {
        userTo,
        userFrom,
        notificationType,
        content,
        entityId
    };

    await Notification.deleteOne(data).catch(error => console.log(error));
    return Notification.create(data).catch(error => console.log(error));;
}


const Notification = mongoose.model('Notification', NotificationSchema)
module.exports = Notification