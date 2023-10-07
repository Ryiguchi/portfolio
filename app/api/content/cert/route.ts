import { TRouteHandler } from '@/app/lib/types/server';
import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import Cert, { ICertDocument } from '@/app/models/certModel';
import { ICertificateData } from '@/app/lib/types/types';
import { sendResponseError } from '@/app/lib/utils/helpers/api.helpers';

export const POST: TRouteHandler = async (req, res) => {
  const certData = await req.json();
  const { date, title, issuer, duration, description, skills, url } = certData;
  console.log(certData);

  if (
    !date ||
    !date.trim().length ||
    !title ||
    !title.trim().length ||
    !issuer ||
    !issuer.trim().length ||
    !duration ||
    !duration.trim().length ||
    !description ||
    !description.trim().length ||
    !skills ||
    !skills.length ||
    !url ||
    !url.trim().length
  ) {
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

  const response = await Cert.create(certData);
  console.log(response);
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

  const certs: ICertificateData[] = await Cert.find().select('-__v -_id');
  closeConnection();

  if (!certs || certs.length === 0) {
    return sendResponseError(500, 'There was an error retrieving your data!');
  }

  return Response.json({ status: 'success', data: certs }, { status: 200 });
};
