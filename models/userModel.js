const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  mobile: {
    type: String,
    require: true,
    unique: true,
    maxLength: 10
  }
});

// Model
const userdb = mongoose.model('user', schema);

module.exports = userdb;