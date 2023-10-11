import Project from './Project';
import SectionLink from '@/app/components/common/SectionLink';

import '../section.sass';

import type { FC } from 'react';
import SectionHeader from '../../common/SectionHeader';

type Props = {
  projects: TProjectData[];
};

const ProjectsSection: FC<Props> = ({ projects }) => {
  return (
    <section className="section" id="projects">
      <SectionHeader section="projects" />
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
