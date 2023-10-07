import Project from '@/app/models/projectModel';
import { TRouteHandler } from '@/app/lib/types/server';
import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import { isProjectDataValid } from '@/app/lib/utils/helpers/data-validation.helpers';
import { sendResponseError } from '@/app/lib/utils/helpers/api.helpers';

export const POST: TRouteHandler = async (req, res) => {
  const projectData = await req.json();

  if (!isProjectDataValid(projectData)) {
    return sendResponseError(400, 'Invalid input');
  }

  try {
    await connectToDB();
  } catch (error) {
    return sendResponseError(
      500,
      'There was an error connecting to the database!'
    );
  }

  await Project.create(projectData);

  closeConnection();

  return Response.json({ status: 'success' }, { status: 200 });
};

export const GET: TRouteHandler = async (req, res) => {
  try {
    await connectToDB();
  } catch (error) {
    return sendResponseError(
      500,
      'There was an error connecting to the database!'
    );
  }

  const projects = await Project.find().select('-__v -_id');
  closeConnection();

  if (!projects || projects.length === 0) {
    sendResponseError(500, 'Error fetching Data');
  }

  return Response.json({ status: 'success', data: projects }, { status: 200 });
};
