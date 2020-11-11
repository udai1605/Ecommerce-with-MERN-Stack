const mongoose =require('mongoose')
const express=require('express');
const asyncHandler = require('express-async-handler');
require("../models/productModel.js");
const Product = mongoose.model("Product");

const router=express.Router();

router.get('/',asyncHandler(async(req,res) => {   //to fetch all products from api/products
    const products=await Product.find({})
    res.json(products)
})
)

router.get('/:id',asyncHandler(async(req,res) => {   //fetch specific product from api/products/:id
    const product=await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }
    else{
        res.status(404).json({message: "Product not found"});
    }
})
)
module.exports = router