import About from '@/app/models/aboutModel';
import Cert from '@/app/models/certModel';
import Project from '@/app/models/projectModel';

import { EErrorMessage } from '@/types/enums.types';
import { closeConnection, connectToDB } from '../db';

export const getContent = async () => {
  await connectToDB();

  const aboutText: IAboutData[] = await About.find().select('-__v -_id');
  const certs: ICertificateData[] = await Cert.find().select('-__v -_id');
  const projects = await Project.find().select('-__v -_id');

  closeConnection();

  if (
    !aboutText ||
    aboutText.length === 0 ||
    !certs ||
    certs.length === 0 ||
    !projects ||
    projects.length === 0
  ) {
    throw new Error(EErrorMessage.NOT_FOUND);
  }

  return {
    about: aboutText[0].text,
    certs,
    projects,
  };
};
