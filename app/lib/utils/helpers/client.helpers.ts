import { ERequestStatus } from '@/types/enums.types';
import { getContentNotification } from './notification.helpers';

import type { SetStateAction } from 'react';

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
  content: IAboutData | ICertificateData | IProjectData | IUser,
  setNotification: React.Dispatch<SetStateAction<INotification | null>>
) => void;

export const postData: TPostContent = async (
  path,
  content,
  setNotification
) => {
  const response = await fetch(`${baseUrl}/${path}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(content),
  });

  const data = await response.json();

  data.status === 'success'
    ? setNotification(getContentNotification(ERequestStatus.SUCCESS))
    : setNotification(
        getContentNotification(ERequestStatus.ERROR, data.message)
      );
};
