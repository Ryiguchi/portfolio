import Project from '@/app/models/projectModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';

import { sendResponseError } from '@/app/lib/utils/helpers/error-handling.helpers';

import { ZProjectDataValidator } from '@/types/zod';

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
