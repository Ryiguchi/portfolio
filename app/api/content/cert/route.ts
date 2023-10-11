import Cert from '@/app/models/certModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';

import { sendResponseError } from '@/app/lib/utils/helpers/error-handling.helpers';

import { ZCertDataValidator } from '@/types/zod';

export const POST: TRouteHandler = async req => {
  const certData = await req.json();

  try {
    const certDataParsed = ZCertDataValidator.parse(certData);

    await connectToDB();

    const certDocument: TCertificateData = await Cert.create(certDataParsed);

    closeConnection();

    return Response.json(
      { status: 'success', document: certDocument },
      { status: 201 }
    );
  } catch (error: any) {
    return sendResponseError(error);
  }
};
