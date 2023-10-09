import Image from 'next/image';

import SkillsList from '@/app/components/common/SkillsList';
import ListTitle from '@/app/components/common/ListTitle';

import type { FC } from 'react';

type Props = {
  project: IProjectData;
};

const Project: FC<Props> = ({ project }) => {
  const imgUrl = `/images/projects/${project.image}`;

  return (
    <a href={project.url} target="_blank" className="item">
      <div className="item_inside_wrapper">
        <div className="item_image">
          <Image
            src={imgUrl}
            alt={project.title}
            width={131}
            height={284}
            style={{ height: 284, width: 131 }}
          />
        </div>
        <div className="content">
          <ListTitle title={project.title} />
          <p>{project.description}</p>
          <SkillsList skills={project.skills} />
        </div>
      </div>
      <div className="item_overlay"></div>
    </a>
  );
};

export default Project;
