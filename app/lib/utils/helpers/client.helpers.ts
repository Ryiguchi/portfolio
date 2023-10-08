import type {
  IAboutData,
  ICertificateData,
  IProjectData,
} from '../../types/types';

export const baseUrl = 'http://localhost:3000';
export const projectImagesUrl = `${baseUrl}/images/projects`;

type TFetchContent = (
  contentName: string
) => Promise<ICertificateData[] | string[] | IProjectData[]> | never;

export const fetchContent: TFetchContent = async contentName => {
  const response = await fetch(`${baseUrl}/api/content/${contentName}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data.data;
};
