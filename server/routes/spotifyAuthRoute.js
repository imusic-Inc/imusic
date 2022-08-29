const express = require('express');
const { login, logged, getUser } = require('../controllers/spotifyAuth')
const router = express.Router();


router
    .get('/', login)


router
    .get('logged', logged)


router
    .get('/getUser/:token', getUser)





module.exports = router;