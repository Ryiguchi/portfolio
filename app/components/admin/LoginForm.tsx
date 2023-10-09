'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import { validateData } from '@/app/lib/utils/helpers/data-validation.helpers';
import { postData } from '@/app/lib/utils/helpers/client.helpers';

import styles from './Form.module.sass';

import type { FC, FormEvent } from 'react';
import NotificationContext from '@/store/notification.context';
import { getContentNotification } from '@/app/lib/utils/helpers/notification.helpers';
import { EErrorMessage, EProviders, ERequestStatus } from '@/types/enums.types';

const LoginForm: FC = () => {
  const { setNotification } = useContext(NotificationContext);

  const [isSignin, setIsSignin] = useState(true);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const { data: session } = useSession();

  // If active session, set state to determine if signIn or createUser
  useEffect(() => {
    session ? setIsSignin(false) : setIsSignin(true);
  }, [session]);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    const userData = { name, password };

    if (!validateData(userData)) {
      setNotification(
        getContentNotification(ERequestStatus.ERROR, EErrorMessage.INPUT)
      );
      return;
    }

    if (isSignin) {
      const result = await signIn(EProviders.CREDENTIALS, {
        redirect: false,
        ...userData,
      });

      result?.ok
        ? setNotification(getContentNotification(ERequestStatus.SUCCESS))
        : setNotification(
            getContentNotification(
              ERequestStatus.ERROR,
              result?.error ? result.error : undefined
            )
          );
    } else {
      postData('api/user', userData as IUser, setNotification);
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div>
        <label htmlFor="name">Name</label>
        <input ref={nameInputRef} type="text" id="name" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input ref={passwordInputRef} type="password" id="password" />
      </div>
      <button>{isSignin ? 'login' : 'add user'}</button>
    </form>
  );
};

export default LoginForm;
