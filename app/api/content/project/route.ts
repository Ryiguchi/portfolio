import Project from '@/app/models/projectModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';
import { sendResponseError } from '@/app/lib/utils/helpers/api.helpers';

import { EErrorMessage } from '@/types/enums.types';

export const POST: TRouteHandler = async (req, res) => {
  const projectData = await req.json();

  if (!validateData(projectData)) {
    return sendResponseError(400, EErrorMessage.INPUT);
  }

  try {
    await connectToDB();
  } catch (error) {
    return sendResponseError(500, EErrorMessage.DB);
  }

  const projectDocument = await Project.create(projectData);

  closeConnection();

  return Response.json(
    { status: 'success', document: projectDocument },
    { status: 200 }
  );
};
