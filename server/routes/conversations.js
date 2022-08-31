const express = require('express');
const { createConversation, getUserConversation } = require('../controllers/conversationController');

const router = express.Router();

router
    .route('/')
    .post(createConversation)


router
    .route('/:userId')
    .get(getUserConversation)





module.exports = router;