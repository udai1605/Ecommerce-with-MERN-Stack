const mongoose = require('mongoose')
const express = require('express');
const Product = mongoose.model("Product");
const asyncHandler = require('express-async-handler');
require("../models/productModel.js");

const {getProducts,getProductById}=require('../controllers/productController')
const router = express.Router();

router.route('/').get(getProducts);

router.route('/:id').get(getProductById);

module.exports = router
