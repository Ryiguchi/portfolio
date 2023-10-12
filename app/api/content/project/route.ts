import Project from '@/lib/models/projectModel';

import { sendResponseError } from '@/lib/helpers/error-handling.helpers';
import { closeConnection, connectToDB } from '@/lib/helpers/db';

import { ZProjectDataValidator } from '@/lib/types/zod';

export const POST: TRouteHandler = async (req, res) => {
  const projectData = await req.json();

  try {
    const projectDataParsed = ZProjectDataValidator.parse(projectData);

    await connectToDB();

    const projectDocument: TProjectData = await Project.create(
      projectDataParsed
    );

    closeConnection();

    return Response.json(
      { status: 'success', document: projectDocument },
      { status: 200 }
    );
  } catch (error: any) {
    return sendResponseError(error);
  }
};
