const express = require('express');
require("../models/orderModel.js");
const {  addOrderItems  } = require('../controllers/orderController')
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, addOrderItems)

module.exports = router
