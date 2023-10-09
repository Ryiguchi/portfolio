'use client';

import { useContext, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import CertForm from '@/app/components/admin/CertForm';
import ProjectForm from '@/app/components/admin/ProjectForm';
import AboutForm from '@/app/components/admin/AboutForm';
import LoginForm from '@/app/components/admin/LoginForm';

import AdminPageContext, { EPages } from '@/store/adminPage.context';

import type { FC } from 'react';
import NotificationContext from '@/store/notification.context';
import Notification from '@/app/components/common/Notification';

const AdminSection: FC = () => {
  const { currentPage } = useContext(AdminPageContext);
  const { notification, setNotification } = useContext(NotificationContext);

  const { data: session, status } = useSession();

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification(null);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [notification, setNotification]);

  return (
    <>
      <div className="admin-page-wrapper">
        {!session && <LoginForm />}
        {session && currentPage === EPages.PROJECT && <ProjectForm />}
        {session && currentPage === EPages.CERT && <CertForm />}
        {session && currentPage === EPages.SKILL && <CertForm />}
        {session && currentPage === EPages.ABOUT && <AboutForm />}
      </div>
      {notification && <Notification notification={notification} />}
    </>
  );
};

export default AdminSection;
