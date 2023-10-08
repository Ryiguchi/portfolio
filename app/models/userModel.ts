import mongoose from 'mongoose';

interface IUserDocument extends Document {
  name: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUserDocument>({
  name: String,
  password: String,
});

export default mongoose.models.User || mongoose.model('User', userSchema);
