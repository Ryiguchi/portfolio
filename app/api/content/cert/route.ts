import Cert from '@/app/models/certModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import { sendResponseError } from '@/app/lib/utils/helpers/api.helpers';
import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';

import { EErrorMessage } from '@/types/enums.types';

export const POST: TRouteHandler = async (req, res) => {
  const certData = await req.json();

  if (!validateData(certData)) {
    return sendResponseError(400, EErrorMessage.INPUT);
  }

  try {
    await connectToDB();
  } catch (error) {
    return sendResponseError(500, EErrorMessage.DB);
  }

  const certDocument = await Cert.create(certData);
  closeConnection();

  return Response.json(
    { status: 'success', document: certDocument },
    { status: 201 }
  );
};

export const GET: TRouteHandler = async (req, res) => {
  try {
    await connectToDB();
  } catch (error) {
    return sendResponseError(500, EErrorMessage.DB);
  }

  const certs: ICertificateData[] = await Cert.find().select('-__v -_id');
  closeConnection();

  if (!certs || certs.length === 0) {
    return sendResponseError(500, EErrorMessage.NOT_FOUND);
  }

  return Response.json({ status: 'success', data: certs }, { status: 200 });
};
