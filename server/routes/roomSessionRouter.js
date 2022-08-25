const express = require('express');
const { viewAllSessionRooms } = require('./../controllers/sessionController');

const router = express.Router();

router
    .route('/')
    .get(viewAllSessionRooms)








module.exports = router;