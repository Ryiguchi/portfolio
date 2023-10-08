'use client';

import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

import AdminHeader from '@/app/components/admin/AdminHeader';

import { AdminPageContextProvider } from '@/store/adminPage.context';

import '../../globals.sass';

import type { FC } from 'react';

type Props = {
  children: React.ReactNode;
  params: {
    session: Session;
  };
};

const RootLayout: FC<Props> = ({
  children,
  params: { session, ...params },
}) => {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <AdminPageContextProvider>
          <body>
            <AdminHeader />
            {children}
          </body>
        </AdminPageContextProvider>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
