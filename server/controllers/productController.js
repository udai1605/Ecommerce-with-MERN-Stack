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


// @desc DELETE a product
// @route DELETE/api/products/:id
// @access Admin user
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message: 'product removed' })
    }
    else {
        res.status(404)
        throw new Error('Product not found')
    }
})

// @desc Create a product
// @route POST/api/products/
// @access Admin user
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Sample name',
        price: 100,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: "Sample brand",
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description'
    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)

})

// @desc Update a product
// @route PUT/api/products/:id
// @access Admin user
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } = req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }



})


module.exports = { getProducts, getProductById, deleteProduct, createProduct, updateProduct }