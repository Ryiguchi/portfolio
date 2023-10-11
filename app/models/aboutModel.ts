import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema<IAboutDocument>({
  text: {
    type: [String],
    validate: {
      validator: function (value: string[]) {
        // Ensure "text" is an array with at least 4 items
        return Array.isArray(value) && value.length >= 4;
      },
      message: 'There must be at least 4 paragraphs in the "text" field.',
    },
  },
});

export default mongoose.models.About || mongoose.model('About', aboutSchema);
