const mongoose = require('mongoose')
const express = require('express');
require("../models/userModel.js");
const { authUser, getUserProfile, registerUser,
  updateUserProfile, getUsers, deleteUser,
  getUserById, updateUser } = require('../controllers/userController')
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware')
router.post('/login', authUser)
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
module.exports = router
