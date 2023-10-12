import { z } from 'zod';

//helpers
const transformArray = (value: string | string[]) => {
  if (typeof value === 'string') {
    return value.split('**');
  } else {
    return value;
  }
};

const arrayValidator = z
  .string()
  .min(1)
  .or(z.array(z.string().min(1)).nonempty())
  .transform(transformArray);

const nonEmptyString = z.string().min(1);

// DATA VALIDATORS
export const ZProjectDataValidator = z.object({
  mobileImg: nonEmptyString.includes('.', {
    message: 'Image names must include the extension',
  }),
  desktopImg: nonEmptyString.includes('.', {
    message: 'Image names must include the extension',
  }),
  title: nonEmptyString,
  description: nonEmptyString,
  skills: arrayValidator,
  url: z.string().url(),
});

export const ZCertDataValidator = z.object({
  date: nonEmptyString,
  title: nonEmptyString,
  issuer: nonEmptyString,
  duration: nonEmptyString,
  description: nonEmptyString,
  skills: arrayValidator,
  url: z.string().url(),
});

export const ZAboutDataValidator = z.object({
  text: arrayValidator,
});

export const ZUserDataValidator = z.object({
  name: z.string().min(3),
  password: z.string().min(8),
});

// Arrays of Data
export const ZProjectsValidator = ZProjectDataValidator.array().nonempty();
export const ZCertsValidator = ZCertDataValidator.array().nonempty();
