var mongoose = require('mongoose');
var User = new mongoose.Schema({
    name: String,
    lasname: String,
    email: String,
    password: String,
    todo: [{
        content: String,
        date: {
            type: Date,
            default: Date.now(),
        },
        done: {type: Boolean, default: false},
    }]
  });
  mongoose.model('User', User);
  module.exports = User;