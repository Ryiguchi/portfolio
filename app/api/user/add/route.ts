import User from '../../../models/userModel';
import type { TRouteHandler } from '@/app/lib/types/server';
import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import { sendResponseError } from '../../../lib/utils/helpers/api.helpers';
import { hashPassword } from '@/app/lib/utils/helpers/auth.helpers';

export const POST: TRouteHandler = async (req, res) => {
  const { name, password } = await req.json();

  if (!name || !name.trim().length || !password || password.trim().length < 8) {
    return sendResponseError(400, 'Invaild input!');
  }

  const hashedPassword = await hashPassword(password);

  const userData = {
    name,
    password: hashedPassword,
  };

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
