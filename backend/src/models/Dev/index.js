const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
  login: { 
    type: String,
    required: true,
    lowercase: true,
  },
  reposMarkedAsPublic: [Number],
});

module.exports = mongoose.model('Dev', DevSchema);
