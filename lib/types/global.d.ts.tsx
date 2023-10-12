import { NextRequest, NextResponse } from 'next/server';
import { FC } from 'react';
import { ERequestStatus } from './enums.types';
import { Document } from 'mongoose';
import { z } from 'zod';
import {
  ZAboutDataValidator,
  ZCertDataValidator,
  ZProjectDataValidator,
  ZUserDataValidator,
} from './zod';

export {};

declare global {
  // Content types
  type TProjectData = z.infer<typeof ZProjectDataValidator>;
  type TCertificateData = z.infer<typeof ZCertDataValidator>;
  type TAboutData = z.infer<typeof ZAboutDataValidator>;
  type TUserData = z.infer<typeof ZUserDataValidator>;

  // Document interfaces for mongoose
  interface IAboutDocument extends Document, TAboutData {}
  interface IProjectDocument extends Document, TProjectData {}
  interface ICertDocument extends Document, TCertificateData {}
  interface IUserDocument extends Document, TUserData {}

  // Success/failed Notifications
  interface INotification {
    status: ERequestStatus;
    title: string;
    message: string;
  }

  // API route handlers
  type TRouteHandler = (req: NextRequest, res: NextResponse) => void;

  // React Context
  type TContextProvider = FC<{ children: React.ReactNode }>;
}
