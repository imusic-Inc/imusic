const express = require('express');
const { login, logged, getUser } = require('../controllers/spotifyAuth')
const router = express.Router();


router
    .get('/', login, getUser)
router
    .get('/logged', logged, getUser)
router
    .get('/getUser/:token', getUser)





module.exports = router;