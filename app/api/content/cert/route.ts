import Cert from '@/app/models/certModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import { sendResponseError } from '@/app/lib/utils/helpers/api.helpers';
import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';

import type { TRouteHandler } from '@/app/lib/types/server';
import type { ICertificateData } from '@/app/lib/types/data.types';

export const POST: TRouteHandler = async (req, res) => {
  const certData = await req.json();

  if (!validateData(certData)) {
    return sendResponseError(400, 'Invalid Input');
  }

  try {
    await connectToDB();
  } catch (error) {
    return sendResponseError(
      500,
      'There was a problem connection to the database'
    );
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
    return sendResponseError(
      500,
      'There was a problem connection to the database'
    );
  }

  const certs: ICertificateData[] = await Cert.find().select('-__v -_id');
  closeConnection();

  if (!certs || certs.length === 0) {
    return sendResponseError(500, 'There was an error retrieving your data!');
  }

  return Response.json({ status: 'success', data: certs }, { status: 200 });
};
