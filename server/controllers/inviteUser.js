const UserInvitation = require("../models/userInvitation")
const User = require('../models/userModel');
const AppError = require("../utils/appError");
const hookAsync = require("../utils/hookAsync");

exports.inviteUser = hookAsync(async(req, res, next) => {


    const { email: email, _id } = req.user;
    const { receiverEmailAddress, session } = req.body;

    if (!session) {

        return next(new AppError("Session room is required", 404)); //401 which means unauthoried 
    }

    // check if user is inviting himself
    if (email === receiverEmailAddress) {

        return next(new AppError("Sorry, you can't invite yourself!", 404)); //401 which means unauthoried 
    }

    // check if the invited user exists in the database
    const targetUser = await User.findOne({ email: receiverEmailAddress });

    if (!targetUser) {

        return next(new AppError("Sorry, the user you are trying to invite doesn't exist. Please check the email address", 404)); //401 which means unauthoried
    }

    // check if invitation has already been sent
    const invitationAlreadyExists = await UserInvitation.findOne({
        senderId: _id,
        receiverId: targetUser._id,
        sessionId: session

    });

    if (invitationAlreadyExists) {
        return next(new AppError('You have already sent an invitation to this user', 401)); //401 which means unauthoried
    }


    // create invitation

    await UserInvitation.create({
        senderId: _id,
        receiverId: targetUser._id,
        sessionId: session
    });



    //await Notification.insertNotification(targetUser._id,req.user._id,);


    res.status(201).json("Invitation has been sent successfully");
})



exports.getUserInvitation = hookAsync(async(req, res, next) => {


    const invitations = await UserInvitation.find({ receiverId: req.user._id })

    res.status(200).json(invitations);
})

exports.acceptInvitation = hookAsync(async(req, res, next) => {

    const { invitationId, sessionId } = req.body;
    req.params.id = sessionId

    if (!invitationId || !sessionId) {
        return next(new AppError('Please provide session or invitation!', 401)); //401 which means unauthoried
    }



    // check if invitation exists
    const invitation = await UserInvitation.exists({ _id: invitationId });
    if (!invitation) {

        return next(new AppError("Sorry, the invitation you are trying to accept doesn't exist", 404));
    }

    const deletedInvitation = await UserInvitation.findByIdAndDelete(
        invitationId
    );

    if (!deletedInvitation) {
        return next(new AppError('No document found with that ID', 404));
    }


    next()



})


exports.rejectInvitation = hookAsync(async(req, res, next) => {
    const { invitationId } = req.body;

    // check if invitation exists
    const invitation = await UserInvitation.exists({ _id: invitationId });

    if (!invitation) {


        return next(new AppError("Sorry, the invitation you are trying to reject doesn't exist", 404));
    }

    // reject the invitation
    await UserInvitation.findByIdAndDelete(invitationId);


    return res.status(200).json("Invitation rejected successfully!");

});