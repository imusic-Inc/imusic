const express = require('express');
const { protect, restrictTo, isLoggedIn } = require('../controllers/authentication');
const { inviteUser } = require('../controllers/inviteUser')

const router = express.Router();

router
    .route('/')
    .post(isLoggedIn, inviteUser)




module.exports = router;