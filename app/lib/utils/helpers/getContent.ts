import About from '@/app/models/aboutModel';
import Cert from '@/app/models/certModel';
import Project from '@/app/models/projectModel';

import { EErrorMessage } from '@/types/enums.types';
import { closeConnection, connectToDB } from '../db';
import {
  ZArrayValidator,
  ZCertsValidator,
  ZProjectsValidator,
} from '@/types/zod';
import { zodErrorHandler } from './error-handling.helpers';

export const getContent = async () => {
  await connectToDB();

  const aboutText = await About.find();
  const certs = await Cert.find();
  const projects = await Project.find();

  closeConnection();

  try {
    const aboutParsed = ZArrayValidator.parse(aboutText[0].text);
    const certsParsed = ZCertsValidator.parse(certs);
    const projectsParsed = ZProjectsValidator.parse(projects);

    return {
      about: aboutParsed,
      certs: certsParsed,
      projects: projectsParsed,
    };
  } catch (error: any) {
    throw new Error(zodErrorHandler(error, EErrorMessage.DATA));
  }
};