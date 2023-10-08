import type {
  IAboutData,
  ICertificateData,
  IProjectData,
  IUser,
} from '../../types/data.types';

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

type TPostContent = (
  contentName: string,
  content: IAboutData | ICertificateData | IProjectData | IUser
) => Promise<Response>;

export const postData: TPostContent = async (path, content) => {
  const response = await fetch(`${baseUrl}/${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(content),
  });

  return response;
};
