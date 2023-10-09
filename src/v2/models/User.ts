import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

export default mongoose.model<UserDocument>('User', UserSchema, 'users');
