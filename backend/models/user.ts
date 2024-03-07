{/*
import mongoose, { Document, Schema, Model } from 'mongoose';
//import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

require('dotenv').config(); 


type UserType = {
  email?: string;
  password?: string;
  fullName?: string;
  facebookId?: string;
  facebookDisplayName?: string;
  facebookEmail?: string;
};

type UserDocument = Document & UserType;


const userSchema: Schema<UserDocument> = new mongoose.Schema(
  {
    email: { type: String, unique: true, sparse: true },
    password: { type: String, required: false },
    fullName: { type: String },
    facebookId: { type: String },
    facebookDisplayName: { type: String },
    facebookEmail: { type: String },
   
  },
  {
    timestamps: true,
  }
);



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

*/}
