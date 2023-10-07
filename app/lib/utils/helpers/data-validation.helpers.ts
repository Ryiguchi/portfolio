import { IProjectData, IProjectDataOptional } from '@/app/lib/types/types';

export const isProjectDataValid = (projectData: IProjectDataOptional) => {
  const { image, title, description, skills, url } = projectData;

  if (
    !image ||
    !image.trim().length ||
    !title ||
    !title.trim().length ||
    !description ||
    !description.trim().length ||
    !skills ||
    skills.length === 0 ||
    !url ||
    !url.trim().length
  ) {
    return false;
  }

  return true;
};
