// appointmets model
import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the type for Facial document
type Appointment = {
    service: string;
    name: string;
    title: string;
    email: string;
    phone: string;
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
interface AppointmentDocument extends Appointment, Document {}

// Define the schema for Facial
const appointmentSchema = new Schema<AppointmentDocument>({
  service: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  title: { type: String, required: true },
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

// Create the model for Facial
const Appointment: Model<AppointmentDocument> = mongoose.model<AppointmentDocument>('Appointment', appointmentSchema);

export default Appointment;
