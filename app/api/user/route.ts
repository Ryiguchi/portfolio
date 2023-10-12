import User from '../../../lib/models/userModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import { hashPassword } from '@/lib/helpers/bcrypt.helpers';
import { sendResponseError } from '@/lib/helpers/error-handling.helpers';

import { ZUserDataValidator } from '@/lib/types/zod';

export const POST: TRouteHandler = async (req, res) => {
  const initialUserData = await req.json();

  try {
    const initialUserDataParsed = ZUserDataValidator.parse(initialUserData);

    const hashedPassword = await hashPassword(initialUserDataParsed.password);

    const userData = {
      name: initialUserDataParsed.name,
      password: hashedPassword,
    };

    await connectToDB();

    const response = await User.create(userData);

    closeConnection();

    return Response.json(
      { status: 'success', user: response.name },
      { status: 201 }
    );
  } catch (error: any) {
    return sendResponseError(error);
  }
};
