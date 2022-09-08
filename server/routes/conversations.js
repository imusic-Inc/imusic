const express = require('express');
const { restrictTo, isLoggedIn, protect } = require('../controllers/authentication');
const { createConversation, getUserConversation, viewAllConversations } = require('../controllers/conversationController');
const { createMessage } = require('../controllers/peerTopeer');

const router = express.Router();

router
    .route('/')
    .get(viewAllConversations)
    .post(createConversation)


router
    .route('/:userId')
    .get(getUserConversation)

router
    .route('/:conversationId/peer')
    .post(protect, isLoggedIn, restrictTo('user'), createMessage)





module.exports = router;