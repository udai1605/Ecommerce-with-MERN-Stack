const mongoose = require('mongoose')
const express = require('express');
const Product = mongoose.model("Product");
require("../models/productModel.js");
const { protect, admin } = require('../middleware/authMiddleware')
const { getProducts, getProductById, deleteProduct, createProduct, updateProduct, createProductReview, getTopProducts } = require('../controllers/productController')
const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)

module.exports = router
