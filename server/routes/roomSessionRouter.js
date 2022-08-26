const express = require('express');
const { viewAllSessionRooms, createSession, getSessionById } = require('./../controllers/sessionController');
const { protect } = require('./../controllers/authentication')
const router = express.Router();

router
    .route('/')
    .get(protect, viewAllSessionRooms)
    .post(createSession)

router
    .route('/:id')
    .get(getSessionById)






module.exports = router;