const sessionModel = require('./../models/session');
const hookAsync = require('./../utils/hookAsync');

exports.viewAllSessionRooms = hookAsync(async(req, res, next) => {

    //Execute Query

    ///const rooms = sessionModel.find()
    res.send("hello")
        //Send Response
    res.status(200).json({
        status: 'success',
        // results: rooms.length,
        // rooms

    });
    S


})