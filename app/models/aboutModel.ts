import mongoose, { Document } from 'mongoose';

const aboutSchema = new mongoose.Schema<IAboutModel>({
  text: {
    type: [String],
  },
});

export default mongoose.models.About || mongoose.model('About', aboutSchema);
