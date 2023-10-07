'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

import styles from './AdminHeader.module.sass';

import type { Dispatch, FC, SetStateAction } from 'react';
import { EPages } from '@/app/admin/page';

type Props = {
  handleNavigate: (page: EPages) => void;
};

const AdminHeader: FC<Props> = ({ handleNavigate }) => {
  const { data: session, status } = useSession();
  console.log(session, status);

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
          <li onClick={() => handleNavigate(EPages.SKILL)}>
            <a>add skill</a>
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
