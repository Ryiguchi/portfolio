import SectionLink from '@/components/common/SectionLink';
import Project from './Project';
import styles from './ProjectSection.module.sass';

const ProjectsSection = () => {
  return (
    <section className="section" id="projects">
      <div className="section_items">
        <Project />
        <Project />
        <Project />
      </div>
      <SectionLink
        text="See More at GitHub"
        url="https://github.com/Ryiguchi"
      />
    </section>
  );
};

export default ProjectsSection;
