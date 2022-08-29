const express = require('express');
const { login } = require('../controllers/spotifyAuth')
const router = express.Router();


router
    .get('/', login)







module.exports = router;