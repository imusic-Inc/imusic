const express = require('express');
const { protect, restrictTo } = require('./../controllers/authentication');
const { newConversation, getConversation } = require('../controllers/conversation-controller')
const router = express.Router();

router
    .route('/')
    .get(protect, restrictTo('user'), getConversation)

router
    .route('/add')
    .post(protect, restrictTo('user'), newConversation)





module.exports = router;