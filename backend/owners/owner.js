const mongoose = require('mongoose');

// Define the Apartment Schema
const ownerSchema = new mongoose.Schema(
  {
    title: String,
    name: String,
    email: String,
    phone: String,
    experience: String,
    bio: String,
    photo: String,
    image: String,
    image2: String,
  },
  { timestamps: true }
);

// Create the Owner model
const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
