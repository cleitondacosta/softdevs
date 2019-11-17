const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  login: { 
    type: String,
    required: true,
    lowercase: true,
  },
});

module.exports = mongoose.model('Company', CompanySchema);
