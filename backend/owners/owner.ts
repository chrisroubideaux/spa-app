// owner schema
import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the type for Owner document
type Owner = {
   title: string;
   name: string;
   email: string;
   phone: string;
   experience: string; 
   bio: string;
   photo: string;
   image: string;
   image2: string; 
}

// Extend the Document interface from Mongoose
interface OwnerDocument extends Owner, Document {}

// Define the schema for Owner
const ownerSchema = new Schema<OwnerDocument>({
   title: { type: String, required: true },
   name: { type: String, required: true },
   email: { type: String, required: true },
   phone: { type: String, required: true },
   experience: { type: String, required: true },
   bio: { type: String, required: true },
   photo: { type: String, required: true },
   image: { type: String, required: true },
   image2: { type: String },
}, { timestamps: true });

// Create the model for owners
const Owner: Model<OwnerDocument> = mongoose.model<OwnerDocument>('Owner', ownerSchema);

export default Owner;
