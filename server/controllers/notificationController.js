const hookAsync = require("../utils/hookAsync");
const Notification = require('../models/notification');



exports.getUserNotifications = hookAsync(async(req, res, next) => {

    var searchObj = { userTo: req.user._id };
    const notifications = await Notification.find(searchObj).populate('userFrom')
    res.status(200).json({
        status: 'success',
        results: notifications.length,
        data: {
            notifications
        }

    });


});