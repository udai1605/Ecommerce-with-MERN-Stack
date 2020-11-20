const express = require('express');
require("../models/orderModel.js");
const { addOrderItems, getOrderById, updateOrderToPaid, getMyOrders } = require('../controllers/orderController')
const router = express.Router();
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, addOrderItems)
router.route('/myorders').get(protect, getMyOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

module.exports = router
