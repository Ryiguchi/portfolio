import CredentialsProvider from 'next-auth/providers/credentials';
import 'dotenv/config';

import User from '@/app/models/userModel';

import { closeConnection, connectToDB } from '@/app/lib/utils/db';

import type { AuthOptions, User as AuthUser } from 'next-auth';
import { EErrorMessage } from '@/types/enums.types';
import { ZUserDataValidator } from '@/types/zod';
import { verifyPassword } from './bcrypt.helpers';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        name: {},
        password: {},
      },

      async authorize(credentials, req) {
        // Verify and type credentials
        let credentialsParsed;
        try {
          credentialsParsed = ZUserDataValidator.parse(credentials);
        } catch (error) {
          throw new Error(EErrorMessage.CREDENTIALS);
        }

        const { name, password } = credentialsParsed;

        // Connect to DB
        try {
          await connectToDB();
        } catch (error: any) {
          throw new Error(error.message || EErrorMessage.CONNECT);
        }

        // Find, verify and type user
        const user = await User.findOne({ name });

        let userParsed;
        try {
          userParsed = ZUserDataValidator.parse(user);
        } catch (error) {
          closeConnection();
          throw new Error(EErrorMessage.NO_USER);
        }

        // Check password
        const isValid = await verifyPassword(password, userParsed.password);

        if (!isValid) {
          closeConnection();
          throw new Error(EErrorMessage.PASSWORD);
        }

        // Return user
        closeConnection();
        return {
          name,
        } as AuthUser;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
};
