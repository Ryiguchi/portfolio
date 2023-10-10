'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import AdminPageContext, { EPages } from '@/store/adminPage.context';

import styles from './AdminHeader.module.sass';

import type { FC } from 'react';

const AdminHeader: FC = () => {
  const { data: session, status } = useSession();
  const { currentPage, setCurrentPage } = useContext(AdminPageContext);

  const handleNavigate = (page: EPages) => {
    setCurrentPage(page);
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li onClick={() => handleNavigate(EPages.PROJECT)}>
            <a className={currentPage === 'project' ? styles.active : ''}>
              project
            </a>
          </li>
          <li onClick={() => handleNavigate(EPages.CERT)}>
            <a className={currentPage === 'cert' ? styles.active : ''}>
              certificate
            </a>
          </li>
          <li onClick={() => handleNavigate(EPages.ABOUT)}>
            <a className={currentPage === 'about' ? styles.active : ''}>
              about
            </a>
          </li>
          <li>
            <Link href={'/'}>back</Link>
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
