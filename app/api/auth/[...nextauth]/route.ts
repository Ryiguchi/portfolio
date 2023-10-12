import { authOptions } from '@/lib/config/authOptions.config';
import NextAuth from 'next-auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
