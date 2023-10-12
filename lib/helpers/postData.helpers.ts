import { getContentNotification } from './notification.helpers';

import { ERequestStatus } from '@/lib/types/enums.types';
import type { SetStateAction } from 'react';

export const baseUrl = process.env.BASE_URL;

type TPostContent = (
  contentName: string,
  content: TAboutData | TCertificateData | TProjectData | TUserData,
  setNotification: React.Dispatch<SetStateAction<INotification | null>>
) => void;

export const postData: TPostContent = async (
  path,
  content,
  setNotification
) => {
  try {
    const response = await fetch(`${baseUrl}/${path}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(content),
    });

    const data = await response.json();

    if (data.status === 'failed') throw new Error(data.message);

    setNotification(getContentNotification(ERequestStatus.SUCCESS));
  } catch (error: any) {
    setNotification(
      getContentNotification(ERequestStatus.ERROR, error.message)
    );
  }
};
