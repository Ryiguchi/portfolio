import AboutSection from '@/app/components/layout/about/AboutSection';
import styles from './page.module.sass';
import ProjectsSection from '@/app/components/layout/projects/ProjectsSection';
import CertSection from '@/app/components/layout/cert/CertSection';
import Header from '@/app/components/layout/header/Header';
import { fetchContent } from './lib/utils/helpers/client.helpers';
import FlashLight from './components/common/FlashLight';

export const getData = async () => {
  const certs = await fetchContent('cert');
  const about = await fetchContent('about');
  const projects = await fetchContent('project');

  return {
    certs,
    about,
    projects,
  };
};

export default async function Home() {
  const data = await getData();

  return (
    <div className={styles.flashlightWrapper}>
      <div className={styles.main_wrapper}>
        <Header />
        <main className={styles.textMain}>
          <AboutSection text={data.about} />
          <ProjectsSection projects={data.projects} />
          <CertSection certs={data.certs} />
        </main>
      </div>
      <FlashLight />
    </div>
  );
}
