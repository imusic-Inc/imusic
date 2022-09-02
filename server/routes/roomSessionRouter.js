const express = require('express');
const { viewAllSessionRooms, createSession, getSessionById, deleteSession, joinRoomSession, leaveRoomSession, updateSession } = require('./../controllers/sessionController');
const { protect, restrictTo, isLoggedIn } = require('./../controllers/authentication');
const { createMessage } = require('../controllers/roomMessage');
const router = express.Router();

router
    .route('/')
    .get( /*protect*/ viewAllSessionRooms)
    .post(protect, createSession)

router
    .route('/:id')
    .get(getSessionById)
    .delete(protect, restrictTo('admin', 'room-admin', 'user'), deleteSession)
    .patch(protect, restrictTo('admin', 'room-admin', 'user'), updateSession)


router
    .route('/:id/session')
    .patch(isLoggedIn, joinRoomSession)

router
    .route('/:id/leave')
    .patch(isLoggedIn, leaveRoomSession)



router
    .route('/:sessionId/messages')
    .post(protect, restrictTo('user'), createMessage)

module.exports = router;