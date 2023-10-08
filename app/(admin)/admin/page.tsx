'use client';

import { useContext } from 'react';
import { useSession } from 'next-auth/react';

import CertForm from '@/app/components/admin/CertForm';
import ProjectForm from '@/app/components/admin/ProjectForm';
import AboutForm from '@/app/components/admin/AboutForm';
import LoginForm from '@/app/components/admin/LoginForm';

import AdminPageContext, { EPages } from '@/store/adminPage.context';

import type { FC } from 'react';

const AdminSection: FC = () => {
  const { currentPage } = useContext(AdminPageContext);

  const { data: session, status } = useSession();

  return (
    <>
      <div className="admin-page-wrapper">
        {!session && <LoginForm />}
        {session && currentPage === EPages.PROJECT && <ProjectForm />}
        {session && currentPage === EPages.CERT && <CertForm />}
        {session && currentPage === EPages.SKILL && <CertForm />}
        {session && currentPage === EPages.ABOUT && <AboutForm />}
      </div>
    </>
  );
};

export default AdminSection;
