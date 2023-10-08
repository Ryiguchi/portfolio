import { ICertificateData } from '@/app/lib/types/data.types';
import mongoose from 'mongoose';

export interface ICertDocument extends mongoose.Document, ICertificateData {}

const certSchema = new mongoose.Schema<ICertDocument>({
  date: {
    type: String,
  },
  title: {
    type: String,
  },
  issuer: {
    type: String,
  },
  duration: {
    type: String,
  },
  description: {
    type: String,
  },
  skills: {
    type: [String],
  },
  url: {
    type: String,
  },
});

export default mongoose.models.Cert || mongoose.model('Cert', certSchema);
