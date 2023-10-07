'use client';

import { useEffect, useRef, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import axios from 'axios';

import type { FC, FormEvent } from 'react';
import styles from './Form.module.sass';

const addUser = async (userData: { name: string; password: string }) => {
  try {
    const response = await axios.post('/api/user/add', userData);
    console.log('[RESPOPNSE]', response);
  } catch (error) {
    console.log(error);
  }
};

const LoginForm: FC = () => {
  const [isSignin, setIsSignin] = useState(true);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      setIsSignin(false);
    } else {
      setIsSignin(true);
    }
  }, [session]);

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    console.log(name, password);

    if (
      !name ||
      !name.trim().length ||
      !password ||
      password.trim().length < 8
    ) {
      console.log('Invalid Input');
      return;
    }

    const userData = { name, password };

    if (isSignin) {
      console.log('signin');
      const result = await signIn('credentials', {
        redirect: false,
        name,
        password,
      });
      // console.log(result);
    } else {
      addUser(userData);
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
