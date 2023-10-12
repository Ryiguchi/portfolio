import { ERequestStatus } from '@/lib/types/enums.types';

export const getContentNotification = (
  status: ERequestStatus | undefined,
  errorMessage?: string
): INotification | null => {
  if (status === ERequestStatus.PENDING) {
    return {
      status,
      title: 'Sending...',
      message: 'Your content is being sent.',
    };
  }

  if (status === ERequestStatus.SUCCESS) {
    return {
      status,
      title: 'Success!',
      message: 'The content was successfully saved!',
    };
  }

  if (status === ERequestStatus.ERROR) {
    return {
      status,
      title: 'Error!',
      message: errorMessage || 'There was an error saving the content',
    };
  }

  return null;
};
