'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import styles from './AdminHeader.module.sass';

import type { FC } from 'react';
import AdminPageContext, { EPages } from '@/store/adminPage.context';

const AdminHeader: FC = () => {
  const { data: session, status } = useSession();
  const { setCurrentPage } = useContext(AdminPageContext);

  const handleNavigate = (page: EPages) => {
    setCurrentPage(page);
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li onClick={() => handleNavigate(EPages.PROJECT)}>
            <a>add project</a>
          </li>
          <li onClick={() => handleNavigate(EPages.CERT)}>
            <a>add certificate</a>
          </li>
          <li onClick={() => handleNavigate(EPages.ABOUT)}>
            <a>add about</a>
          </li>
          <li>
            <Link href={'/'}>back to portfolio</Link>
          </li>
        </ul>
      </nav>
      {session ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <button>Login as Admin</button>
      )}
    </header>
  );
};

export default AdminHeader;
