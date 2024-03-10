// massages schema
import mongoose from 'mongoose';
// Create the model for Massages
const Massage = mongoose.model('Massage', massageSchema);

// Define the schema for Facial
const massageSchema = new mongoose.Schema(
  {
    service: { type: String, required: true },
    name: { type: String, required: true },
    bio: { type: String, required: true },
    experience: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    price2: { type: String, required: true },
    image: { type: String, required: true },
    image2: { type: String },
    photo: { type: String, required: true },
    slot: { type: String, required: true },
    slot2: { type: String, required: true },
    slot3: { type: String, required: true },
    slot4: { type: String, required: true },
    slot5: { type: String, required: true },
    slot6: { type: String, required: true },
    slot7: { type: String, required: true },
    days: { type: String, required: true },
  },
  { timestamps: true }
);

export default Massage;
