import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

require('dotenv').config(); // Load environment variables

// Define the user schema and its types
type UserType = {
  email?: string;
  password?: string;
  fullName?: string;
  facebookId?: string;
  facebookDisplayName?: string;
  facebookEmail?: string;
};

type UserDocument = Document & UserType;

// Define the user schema
const userSchema: Schema<UserDocument> = new mongoose.Schema(
  {
    email: { type: String, unique: true, sparse: true },
    password: { type: String, required: false },
    fullName: { type: String },
    facebookId: { type: String },
    facebookDisplayName: { type: String },
    facebookEmail: { type: String },
    // ... other fields
  },
  {
    timestamps: true,
  }
);
{/*
// Hash the password before saving it
userSchema.pre<UserDocument>('save', async function (next) {
    try {
        if (this.isModified('password')) {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(this.password || '', salt); // Add null check for password
            this.password = hashedPassword;
        }
        next();
    } catch (error: any) { // Specify the type of the error parameter
        next(error);
    }
});
*/}
// Method to compare passwords
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

// Method to generate a JWT token for the user
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET || '', {
    expiresIn: '1h',
  });
  return token;
};

// Define the User model
const User: Model<UserDocument> = mongoose.model<UserDocument>('User', userSchema);

export default User;
