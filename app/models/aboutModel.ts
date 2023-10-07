import mongoose, { Document } from 'mongoose';

export interface IAboutModel extends Document {
  text: string[];
}

const aboutSchema = new mongoose.Schema<IAboutModel>({
  text: {
    type: [String],
  },
});

export default mongoose.models.About || mongoose.model('About', aboutSchema);
