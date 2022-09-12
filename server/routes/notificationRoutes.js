const express = require('express');
const { protect, restrictTo, isLoggedIn } = require('./../controllers/authentication');
const { getUserNotifications } = require('../controllers/notificationController')
const router = express.Router();

router
    .route('/')
    .get(protect, isLoggedIn, restrictTo('user'), getUserNotifications)






module.exports = router;