import { TRouteHandler } from '@/app/lib/types/server';
import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import About from '@/app/models/aboutModel';
import { IAboutData } from '@/app/lib/types/types';
import { sendResponseError } from '@/app/lib/utils/helpers/api.helpers';

export const POST: TRouteHandler = async (req, res) => {
  const { text } = await req.json();

  if (!text || text.length === 0) {
    return sendResponseError(400, 'Invaild input!');
  }

  try {
    await connectToDB();
  } catch (error) {
    return sendResponseError(
      500,
      'There was an error connecting to the database!'
    );
  }

  await About.create({ text });

  closeConnection();

  return Response.json({ status: 'success' }, { status: 201 });
};

export const GET: TRouteHandler = async (req, res) => {
  try {
    await connectToDB();
  } catch (error) {
    return sendResponseError(
      500,
      'There was a problem connection to the database'
    );
  }

  const aboutText: IAboutData[] = await About.find().select('-__v -_id');
  closeConnection();

  if (!aboutText || aboutText.length === 0) {
    return sendResponseError(500, 'There was an error retrieving your data!');
  }

  return Response.json(
    { status: 'success', data: aboutText[0].text },
    { status: 200 }
  );
};
