import About from '@/app/models/aboutModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';

import { sendResponseError } from '@/app/lib/utils/helpers/error-handling.helpers';

import { ZAboutDataValidator } from '@/types/zod';

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
