const mongoose = require('mongoose') 
const users  =require('./data/users.js')
const products=require('./data/products.js') 
const connectDB =require('./config/db.js')
const dotenv =require('dotenv');
dotenv.config()
require("./models/orderModel.js");
require("./models/productModel.js");
require("./models/userModel.js");
const User = mongoose.model("User");
const Product = mongoose.model("Product");
const Order=mongoose.model("Order");
connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Order.deleteMany()
    await Product.deleteMany()
    

    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}