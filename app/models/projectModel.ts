import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema<IProjectDocument>({
  mobileImg: String,
  desktopImg: String,
  title: String,
  description: String,
  skills: [String],
  url: String,
});

export default mongoose.models.Project ||
  mongoose.model('Project', projectSchema);
