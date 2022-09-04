const express = require('express');
const { protect, restrictTo } = require('../controllers/authentication');
const { createMessage, getAllPrivateMessages } = require('../controllers/peerTopeer');

const router = express.Router();



router
    .route('/')
    .get(getAllPrivateMessages)
    .post(protect, restrictTo('user'), createMessage)




module.exports = router;