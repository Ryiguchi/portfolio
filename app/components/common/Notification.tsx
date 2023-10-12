import ReactDOM from 'react-dom';

import styles from './Notification.module.sass';

import type { FC } from 'react';
import { ERequestStatus } from '@/lib/types/enums.types';

type Props = { notification: INotification };

const Notification: FC<Props> = ({ notification }) => {
  const { status, title, message } = notification;

  let statusClass = '';

  if (status === ERequestStatus.SUCCESS) {
    statusClass = styles.success;
  }
  if (status === ERequestStatus.ERROR) {
    statusClass = styles.error;
  }

  const notificationClasses = `${styles.notification} ${statusClass}`;

  return ReactDOM.createPortal(
    <div className={notificationClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notification')!
  );
};

export default Notification;
