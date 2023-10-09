import AboutSection from '@/app/components/layout/about/AboutSection';
import ProjectsSection from '@/app/components/layout/projects/ProjectsSection';
import CertSection from '@/app/components/layout/cert/CertSection';
import Footer from '../components/layout/footer/Footer';

import { fetchContent } from '../lib/utils/helpers/client.helpers';

import styles from './page.module.sass';

import type { FC } from 'react';
import type { IContentData } from '../lib/types/data.types';

const getData = async () => {
  // Fetch all content from api routes
  const certs = await fetchContent('cert');
  const about = await fetchContent('about');
  const projects = await fetchContent('project');

  return {
    certs,
    about,
    projects,
  } as IContentData;
};

const Home: FC = async () => {
  const data = await getData();

  return (
    <main className={styles.main}>
      <AboutSection text={data.about} />
      <ProjectsSection projects={data.projects} />
      <CertSection certs={data.certs} />
      <Footer />
    </main>
  );
};

export default Home;
