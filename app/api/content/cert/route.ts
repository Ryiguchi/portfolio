import Cert from '@/lib/models/certModel';

import { sendResponseError } from '@/lib/helpers/error-handling.helpers';
import { closeConnection, connectToDB } from '@/lib/helpers/db';

import { ZCertDataValidator } from '@/lib/types/zod';

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
