const router = require('express').Router();
const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/todo';
// Importation du model
const userSchema = require('../models/user');

// Connection au base de donnee
mongoose.connect(db, (err) => {
    console.log("Database connection in port 27017")
})
// Collection dans la base de donnee
const userModel = mongoose.model('users', userSchema)