const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler');
const User = mongoose.model("User");


// @desc Auth user & get token
// @route  POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email})


    res.send({email,password});
})


module.exports = {authUser};