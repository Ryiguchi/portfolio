import { IProjectData } from '@/app/lib/types/data.types';
import mongoose from 'mongoose';

interface IProjectDocument extends mongoose.Document, IProjectData {}

const projectSchema = new mongoose.Schema<IProjectDocument>({
  image: String,
  title: String,
  description: String,
  skills: [String],
  url: String,
});

export default mongoose.models.Project ||
  mongoose.model('Project', projectSchema);
