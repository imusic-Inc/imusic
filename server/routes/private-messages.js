const express = require('express');
const { createMessage, getMessages } = require('../controllers/peerTopeer');

const router = express.Router();


router
    .route('/:conversationId')
    .get(getMessages)

router
    .route('/')
    .post(createMessage)




module.exports = router;