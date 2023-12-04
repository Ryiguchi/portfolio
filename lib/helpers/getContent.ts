import About from '@/lib/models/aboutModel';
import Cert from '@/lib/models/certModel';
import Project from '@/lib/models/projectModel';

import { EErrorMessage } from '@/lib/types/enums.types';
import { closeConnection, connectToDB } from './db';
import {
  ZAboutDataValidator,
  ZCertsValidator,
  ZProjectsValidator,
} from '@/lib/types/zod';
import { zodErrorHandler } from './error-handling.helpers';

export const getContent = async () => {
  await connectToDB();

  const aboutText = await About.find();
  const certs = await Cert.find();
  const projects = await Project.find();
  

  closeConnection();

  console.log("[CERTS]", certs);
  console.log("[PROJECTS]", projects);

  try {
    const aboutParsed = ZAboutDataValidator.parse(aboutText[0]);
    const certsParsed = ZCertsValidator.parse(certs);
    const projectsParsed = ZProjectsValidator.parse(projects);

    return {
      about: aboutParsed.text,
      certs: certsParsed,
      projects: projectsParsed,
    };
  } catch (error: any) {
    throw new Error(zodErrorHandler(error, EErrorMessage.DATA));
  }
};
