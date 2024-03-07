// massages schema
import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the type for Massage document
type Massage = {
    service: string;
    name: string;
    bio: string;
    experience: string;
    phone: string;
    email: string;
    title: string;
    description: string;
    price: string;
    price2: string;
    image: string;
    image2: string;
    photo: string;
    slot: string;
    slot2: string;
    slot3: string;
    slot4: string;
    slot5: string;
    slot6: string;
    slot7: string;
    days: string;
}

// Extend the Document interface from Mongoose
interface MassageDocument extends Massage, Document {}

// Define the schema for Facial
const facialSchema = new Schema<MassageDocument>({
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
}, { timestamps: true });

// Create the model for Massages
const Massage: Model<MassageDocument> = mongoose.model<MassageDocument>('Massage', facialSchema);

export default Massage;