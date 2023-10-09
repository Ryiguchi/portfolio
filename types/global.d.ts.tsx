import { NextRequest, NextResponse } from 'next/server';
import { FC } from 'react';
import { ERequestStatus } from './enums.types';

export {};

declare global {
  // CONTENT
  interface IUser {
    name: string;
    password: string;
  }

  interface ICertificateData {
    date: string;
    title: string;
    issuer: string;
    duration: string;
    description: string;
    skills: string[];
    url: string;
  }

  type IAboutData = {
    text: string[];
  };

  interface IProjectData {
    image: string;
    desktopImg: string;
    title: string;
    description: string;
    skills: string[];
    url: string;
  }

  interface IContentData {
    certs: ICertificateData[];
    about: string[];
    projects: IProjectData[];
  }

  // OPTIONAL CONTENT
  interface ICertificateDataOptional {
    date?: string;
    title?: string;
    issuer?: string;
    duration?: string;
    description?: string;
    skills?: string[];
    url?: string;
  }

  type IAboutDataOptional = {
    text?: string[];
  };

  interface IProjectDataOptional {
    image?: string;
    desktopImg?: string;
    title?: string;
    description?: string;
    skills?: string[];
    url?: string;
  }

  interface IUserOptional {
    name?: string;
    password?: string;
  }

  // NOTIFICATION

  interface INotification {
    status: ERequestStatus;
    title: string;
    message: string;
  }

  type TRouteHandler = (req: NextRequest, res: NextResponse) => void;

  type TContextProvider = FC<{ children: React.ReactNode }>;
}
