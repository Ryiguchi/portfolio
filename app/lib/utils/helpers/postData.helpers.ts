import { getContentNotification } from './notification.helpers';

import { ERequestStatus } from '@/types/enums.types';
import type { SetStateAction } from 'react';

export const baseUrl = process.env.BASE_URL;

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