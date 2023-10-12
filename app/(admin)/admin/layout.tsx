'use client';

import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

import AdminHeader from '@/app/components/admin/AdminHeader';

import { AdminPageContextProvider } from '@/lib/store/adminPage.context';
import { NotificationContextProvider } from '@/lib/store/notification.context';

import { inter } from '@/lib/config/fonts.config';

import '../../../lib/sass/globals.sass';

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
    <html lang="en" className={inter.className}>
      <SessionProvider session={session}>
        <AdminPageContextProvider>
          <NotificationContextProvider>
            <body>
              <AdminHeader />
              {children}
              <div id="notification"></div>
            </body>
          </NotificationContextProvider>
        </AdminPageContextProvider>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
