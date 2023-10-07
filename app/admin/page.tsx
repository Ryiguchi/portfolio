'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

import AdminHeader from '@/app/components/admin/AdminHeader';
import CertForm from '@/app/components/admin/CertForm';
import LoginForm from '@/app/components/admin/LoginForm';

import type { FC } from 'react';
import ProjectForm from '@/app/components/admin/ProjectForm';
import AboutForm from '@/app/components/admin/AboutForm';

export enum EPages {
  PROJECT = 'project',
  CERT = 'cert',
  SKILL = 'skill',
  ABOUT = 'about',
}

const AdminSection: FC = () => {
  const [currentPage, setCurrentPage] = useState(EPages.CERT);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: session, status } = useSession();

  const handleNavigate = (page: EPages) => {
    if (!session) return;
    setCurrentPage(page);
  };

  if (!session) {
    return (
      <>
        <AdminHeader handleNavigate={handleNavigate} />
        <div className="admin-page-wrapper">
          <LoginForm />
        </div>
      </>
    );
  }

  return (
    <>
      <AdminHeader handleNavigate={handleNavigate} />
      <div className="admin-page-wrapper">
        {currentPage === EPages.PROJECT && <ProjectForm />}
        {currentPage === EPages.CERT && <CertForm />}
        {currentPage === EPages.SKILL && <CertForm />}
        {currentPage === EPages.ABOUT && <AboutForm />}
      </div>
    </>
  );
};

export default AdminSection;
