const { application } = require('express');
const mongoose = require('mongoose');


// CREATING AN EMBEDDED SCHEMA:
const applicationSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  postingLink: {
    type: String,
  },
  status: {
    type: String,
    // enum means that the value must be one of these values. For example: days of the week
    enum: ['interested', 'applied', 'interviewing', 'rejected', 'accepted'],
  },
})


const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // one-to-one:     application:  applicationSchema 
  // one-to-many:    application: [applicationSchema] 
  application: [applicationSchema]
});





const User = mongoose.model('User', userSchema);

module.exports = User;
