const UserInvitation = require("../models/userInvitation")
const User = require('../models/userModel')
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