'use client';

import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import { Analytics } from '@vercel/analytics/react';

import FlashLight from '../components/common/FlashLight';
import Header from '../components/layout/header/Header';

import { inter } from '../lib/utils/helpers/fonts.helpers';
import '../globals.sass';
import styles from './RootLayout.module.sass';

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
        <body>
          <div className={styles.flashlightWrapper}>
            <div className={styles.main_wrapper}>
              <Header />
              {children}
              <FlashLight />
              <Analytics />
            </div>
          </div>
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
