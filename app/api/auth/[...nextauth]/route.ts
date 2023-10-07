import User from '@/app/models/userModel';
import { IUser } from '@/app/lib/types/types';
import { closeConnection, connectToDB } from '@/app/lib/utils/db';
import { verifyPassword } from '@/app/lib/utils/helpers/auth.helpers';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        name: {},
        password: {},
      },

      async authorize(credentials, req) {
        console.log('AUTHORIZE');

        if (!credentials?.name || !credentials?.password) {
          throw new Error('Invalid Credentials!');
        }

        try {
          await connectToDB();
        } catch (error: any) {
          throw new Error(
            error.message || 'Therre was a problem connecting to the database!'
          );
        }
        const { name, password } = credentials;

        const user: IUser | null = await User.findOne({ name });

        if (!user) {
          closeConnection();
          throw new Error('Could not find user!');
        }

        const isValid = verifyPassword(password, user.password);

        if (!isValid) {
          closeConnection();
          throw new Error('Invalid password!');
        }

        closeConnection();
        return {
          name,
          id: user.id,
        };
      },
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
