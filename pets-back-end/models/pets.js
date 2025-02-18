const {Schema, model} = require('mongoose');


const petSchema = Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      min: 0,
      required: true,
    },
    breed: String,
  });
  
const Pets = model('Pets', petSchema);

module.exports = Pets