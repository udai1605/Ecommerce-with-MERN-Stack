const mongoose = require('mongoose')
const Product = mongoose.model("Product");
const asyncHandler = require('express-async-handler');

const getProducts = asyncHandler(async (req, res) => {  //to fetch all products from api/products
    const products = await Product.find({})
    res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    }
    else {
        res.status(404)
        throw new Error('Product not found')
    }
})

module.exports ={getProducts,getProductById}