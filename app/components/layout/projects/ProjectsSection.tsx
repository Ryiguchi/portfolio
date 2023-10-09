import Project from './Project';
import SectionLink from '@/app/components/common/SectionLink';

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
