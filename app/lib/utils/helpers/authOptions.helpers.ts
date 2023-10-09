import CredentialsProvider from 'next-auth/providers/credentials';

import User from '@/app/models/userModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import { verifyPassword } from '@/app/lib/utils/helpers/auth.helpers';

import type { AuthOptions, User as AuthUser } from 'next-auth';
import { EErrorMessage } from '@/types/enums.types';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        name: {},
        password: {},
      },

      async authorize(credentials, req) {
        if (!credentials?.name || !credentials?.password) {
          throw new Error(EErrorMessage.CREDENTIALS);
        }

        try {
          await connectToDB();
        } catch (error: any) {
          throw new Error(error.message || EErrorMessage.DB);
        }
        const { name, password } = credentials;

        const user: IUser | null = await User.findOne({ name });

        if (!user) {
          closeConnection();
          throw new Error(EErrorMessage.NO_USER);
        }

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          closeConnection();
          throw new Error(EErrorMessage.PASSWORD);
        }

        closeConnection();
        return {
          name,
        } as AuthUser;
      },
    }),
  ],
};
