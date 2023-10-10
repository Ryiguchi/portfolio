import About from '@/app/models/aboutModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import { sendResponseError } from '@/app/lib/utils/helpers/api.helpers';
import { validateArray } from '@/app/lib/utils/helpers/data-validation.helpers';

import { EErrorMessage } from '@/types/enums.types';

export const POST: TRouteHandler = async (req, res) => {
  const { text } = await req.json();

  if (!validateArray(text)) {
    return sendResponseError(400, EErrorMessage.INPUT);
  }

  try {
    await connectToDB();
  } catch (error) {
    return sendResponseError(500, EErrorMessage.DB);
  }

  const aboutDocument = await About.create({ text });

  closeConnection();

  return Response.json(
    { status: 'success', document: aboutDocument },
    { status: 201 }
  );
};
