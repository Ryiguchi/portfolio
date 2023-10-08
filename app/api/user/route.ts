import User from '../../models/userModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import { sendResponseError } from '../../lib/utils/helpers/api.helpers';
import { hashPassword } from '@/app/lib/utils/helpers/auth.helpers';
import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';

import type { TRouteHandler } from '@/app/lib/types/server';

export const POST: TRouteHandler = async (req, res) => {
  const { name, password } = await req.json();

  if (validateData({ name, password })) {
    return sendResponseError(400, 'Invaild input!');
  }

  const hashedPassword = await hashPassword(password);

  const userData = {
    name,
    password: hashedPassword,
  };

  console.log('PROJECTSDATASERVER', userData);

  try {
    await connectToDB();
  } catch (error) {
    throw new Error('There was an error connection to the database!');
  }

  const response = await User.create(userData);

  closeConnection();

  return Response.json(
    { status: 'success', user: response.name },
    { status: 201 }
  );
};
