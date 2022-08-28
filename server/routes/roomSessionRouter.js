const express = require('express');
const { viewAllSessionRooms, createSession, getSessionById, deleteSession, joinRoomSession } = require('./../controllers/sessionController');
const { protect, restrictTo } = require('./../controllers/authentication')
const router = express.Router();

router
    .route('/')
    .get( /*protect*/ viewAllSessionRooms)
    .post(protect, createSession)

router
    .route('/:id')
    .get(getSessionById)
    .delete(protect, restrictTo('admin', 'room-admin', 'user'), deleteSession);

router
    .route('/:id/session')
    .patch(protect, joinRoomSession)

module.exports = router;