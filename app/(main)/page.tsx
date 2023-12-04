import AboutSection from '@/app/components/layout/about/AboutSection';
import ProjectsSection from '@/app/components/layout/projects/ProjectsSection';
import CertSection from '@/app/components/layout/cert/CertSection';
import Footer from '../components/layout/footer/Footer';

import { getContent } from '../../lib/helpers/getContent';
import { mainMetadataObject } from '../../lib/config/metadata.config';

import styles from './page.module.sass';

import type { FC } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = mainMetadataObject;

export const revalidate = 3600;

const Home: FC = async () => {
  const { about, certs, projects } = await getContent();

  const sortedCerts = certs.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;

    return 0;
  });

  return (
    <main className={styles.main}>
      <AboutSection text={about} />
      <ProjectsSection projects={projects} />
      <CertSection certs={sortedCerts} />
      <Footer />
    </main>
  );
};

export default Home;
