import SectionLink from '@/app/components/common/SectionLink';
import Project from './Project';
import styles from './ProjectSection.module.sass';
import { IProjectData } from '@/app/lib/types/types';
import type { FC } from 'react';

type Props = {
  projects: IProjectData[];
};

const ProjectsSection: FC<Props> = ({ projects }) => {
  return (
    <section className="section" id="projects">
      <div className="section_items">
        {projects &&
          projects.map(project => (
            <Project key={project.title} project={project} />
          ))}
      </div>
      <SectionLink
        text="See More at GitHub"
        url="https://github.com/Ryiguchi"
      />
    </section>
  );
};

export default ProjectsSection;
