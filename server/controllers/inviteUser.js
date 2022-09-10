const UserInvitation = require("../models/userInvitation")
const User = require('../models/userModel');
const AppError = require("../utils/appError");
const hookAsync = require("../utils/hookAsync");

exports.inviteUser = hookAsync(async(req, res, next) => {


    const { email: email, _id } = req.user;
    const { receiverEmailAddress, session } = req.body;

    if (!session) {
        return res
            .status(404)
            .send(
                "Session room is required"
            );
    }

    // check if user is inviting himself
    if (email === receiverEmailAddress) {
        return res.status(400).send("Sorry, you can't invite yourself");
    }

    // check if the invited user exists in the database
    const targetUser = await User.findOne({ email: receiverEmailAddress });

    if (!targetUser) {
        return res
            .status(404)
            .send(
                "Sorry, the user you are trying to invite doesn't exist. Please check the email address"
            );
    }

    // check if invitation has already been sent
    const invitationAlreadyExists = await UserInvitation.findOne({
        senderId: _id,
        receiverId: targetUser._id,
    });

    if (invitationAlreadyExists) {
        return res
            .status(409)
            .send("You have already sent an invitation to this user");
    }


    // create invitation

    await UserInvitation.create({
        senderId: _id,
        receiverId: targetUser._id,
        sessionId: session
    });


    return res.status(201).send("Invitation has been sent successfully");
})



exports.getUserInvitation = hookAsync(async(req, res, next) => {


    const invitations = await UserInvitation.find({ receiverId: req.user._id })

    res.status(200).json(invitations);
})

exports.acceptInvitation = hookAsync(async(req, res, next) => {

    const { invitationId, sessionId } = req.body;

    if (!invitationId || !sessionId) {
        return next(new AppError('Please provide session or invitation!', 401)); //401 which means unauthoried
    }

    console.log(req.params.id);

    // check if invitation exists
    const invitation = await UserInvitation.exists({ _id: invitationId });
    if (!invitation) {
        return res
            .status(404)
            .send(
                "Sorry, the invitation you are trying to accept doesn't exist"
            );
    }




    next()



})


exports.rejectInvitation = hookAsync(async(req, res, next) => {
    const { invitationId } = req.body;

    // check if invitation exists
    const invitation = await UserInvitation.exists({ _id: invitationId });

    if (!invitation) {
        return res
            .status(404)
            .send(
                "Sorry, the invitation you are trying to reject doesn't exist"
            );
    }

    // reject the invitation
    await UserInvitation.findByIdAndDelete(invitationId);


    return res.status(200).send("Invitation rejected successfully!");

})