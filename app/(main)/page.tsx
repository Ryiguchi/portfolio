import AboutSection from '@/app/components/layout/about/AboutSection';
import ProjectsSection from '@/app/components/layout/projects/ProjectsSection';
import CertSection from '@/app/components/layout/cert/CertSection';
import Footer from '../components/layout/footer/Footer';

import { getContent } from '../lib/utils/helpers/getContent';

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
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/icons/favicon32.png',
    shortcut: '/icons/shortcut144.png',
    apple: '/icons/apple180.png',
  },
};

export const revalidate = 3600;

const Home: FC = async () => {
  const { about, certs, projects } = await getContent();

  return (
    <main className={styles.main}>
      <AboutSection text={about} />
      <ProjectsSection projects={projects} />
      <CertSection certs={certs} />
      <Footer />
    </main>
  );
};

export default Home;
