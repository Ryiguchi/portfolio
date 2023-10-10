import AboutSection from '@/app/components/layout/about/AboutSection';
import ProjectsSection from '@/app/components/layout/projects/ProjectsSection';
import CertSection from '@/app/components/layout/cert/CertSection';
import Footer from '../components/layout/footer/Footer';

import { fetchContent } from '../lib/utils/helpers/client.helpers';

import styles from './page.module.sass';

import type { FC } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ryan Iguchi - Accepting internships (LIA)',
  description:
    "Enthusiastic full-stack Javascript student seeking internship opportunities. Explore my portfolio showcasing a diverse range of projects and my educational journey. Let's connect and explore how I can contribute to your team.",
  keywords: [
    'Ryan Iguchi',
    'LIA',
    'Internship',
    'Full-stack',
    'Javascript',
    'NodeJS',
    'Stockholm',
  ],
  authors: [
    { name: 'Ryan Iguchi', url: 'https://www.linkedin.com/in/ryan-iguchi/' },
  ],
  creator: 'Ryan Iguchi',
  applicationName: 'Ryan Iguchi - Portfolio',
};

export const revalidate = 3600;

const getData = async () => {
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
