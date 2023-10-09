'use client';

import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';

import AdminHeader from '@/app/components/admin/AdminHeader';

import { AdminPageContextProvider } from '@/store/adminPage.context';

import '../../globals.sass';

import type { FC } from 'react';
import { NotificationContextProvider } from '@/store/notification.context';
import { inter } from '@/app/lib/utils/helpers/fonts.helpers';

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
