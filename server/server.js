const express=require('express');
const dotenv = require('dotenv');
const connectDB =require('./config/db')
require("./models/orderModel.js");
require("./models/productModel.js");
require("./models/userModel.js");
const {notFound,errorHandler} = require('./middleware/errorMiddleware.js');

const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const { json } = require('express');

dotenv.config()
connectDB()
const app=express();

app.use(express.json());
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use(errorHandler);
app.use(notFound);



app.get('/',(req,res) => {
    res.send('API is available');
})

app.get('/api/products',(req,res) => {
    res.json(products);
    // res.send('API is available');
})


app.get('/api/products/:id',(req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
    
})

const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))