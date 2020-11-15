const mongoose = require('mongoose')
const express = require('express');
require("../models/userModel.js");
const { authUser } = require('../controllers/userController')
const router = express.Router();

router.post('/login', authUser)



module.exports = router
