import { z } from 'zod';

export const ZProjectDataValidator = z.object({
  mobileImg: z
    .string()
    .min(1)
    .includes('.', { message: 'Image names must include the extension' }),
  desktopImg: z
    .string()
    .min(1)
    .includes('.', { message: 'Image names must include the extension' }),
  title: z.string().min(1),
  description: z.string().min(1),
  skills: z.string().min(1).array().nonempty(),
  url: z.string().url(),
});

export const ZCertDataValidator = z.object({
  date: z.string().min(1),
  title: z.string().min(1),
  issuer: z.string().min(1),
  duration: z.string().min(1),
  description: z.string().min(1),
  skills: z.string().min(1).array().nonempty(),
  url: z.string().url(),
});

export const ZAboutDataValidator = z.object({
  text: z.string().min(1).array().nonempty(),
});

export const ZUserDataValidator = z.object({
  name: z.string().min(3),
  password: z.string().min(8),
});

export const ZArrayValidator = z.string().min(1).array().nonempty();
export const ZProjectsValidator = ZProjectDataValidator.array().nonempty();
export const ZCertsValidator = ZCertDataValidator.array().nonempty();
