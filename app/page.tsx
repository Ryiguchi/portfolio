import AboutSection from '@/components/layout/about/AboutSection';
import classes from './page.module.sass';
import ProjectsSection from '@/components/layout/projects/ProjectsSection';
import SkillsSection from '@/components/layout/skills/SkillsSection';

export default function Home() {
  return (
    <main className={classes.textMain}>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}
