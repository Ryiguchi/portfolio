import About from '@/lib/models/aboutModel';

import { sendResponseError } from '@/lib/helpers/error-handling.helpers';
import { closeConnection, connectToDB } from '@/lib/helpers/db';

import { ZAboutDataValidator } from '@/lib/types/zod';

export const POST: TRouteHandler = async req => {
  const aboutData = await req.json();

  try {
    const aboutDataParsed = ZAboutDataValidator.parse(aboutData);

    await connectToDB();

    const aboutDocument: TAboutData = await About.create(aboutDataParsed);

    closeConnection();

    return Response.json(
      { status: 'success', document: aboutDocument },
      { status: 201 }
    );
  } catch (error: any) {
    return sendResponseError(error);
  }
};
