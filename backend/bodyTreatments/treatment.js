// body-treatment schema
const mongoose = require('mongoose');

// Define the Treatment Schema
const treatmentSchema = new mongoose.Schema(
  {
    service: String,
    name: String,
    bio: String,
    experience: String,
    phone: String,
    email: String,
    title: String,
    description: String,
    price: String,
    addOn1: String,
    addOn2: String,
    addOn3: String,
    addOn4: String,
    addOn5: String,
    image: String,
    image2: String,
    photo: String,
    slot: String,
    slot2: String,
    slot3: String,
    slot4: String,
    slot5: String,
    slot6: String,
    slot7: String,
    days: String,
  },
  { timestamps: true }
);

// Create the Treatment model
const Treatment = mongoose.model('Treatment', treatmentSchema);

module.exports = Treatment;
