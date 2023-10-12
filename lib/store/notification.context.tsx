import { ERequestStatus } from '@/lib/types/enums.types';
import { createContext, useState } from 'react';

import type { SetStateAction } from 'react';

type TNotificationContext = {
  notification: INotification | null;
  setNotification: React.Dispatch<SetStateAction<INotification | null>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<SetStateAction<string>>;
  requestStatus: ERequestStatus | null;
  setRequestStatus: React.Dispatch<SetStateAction<ERequestStatus | null>>;
};

const NotificationContext = createContext<TNotificationContext>({
  notification: null,
  setNotification: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
  requestStatus: null,
  setRequestStatus: () => {},
});

export const NotificationContextProvider: TContextProvider = ({ children }) => {
  const [requestStatus, setRequestStatus] = useState<ERequestStatus | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState('');
  const [notification, setNotification] = useState<INotification | null>(null);

  const context = {
    requestStatus,
    setRequestStatus,
    errorMessage,
    setErrorMessage,
    notification,
    setNotification,
  };

  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
