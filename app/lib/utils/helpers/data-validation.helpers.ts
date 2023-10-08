export interface ICertificateDataOptional {
  date?: string;
  title?: string;
  issuer?: string;
  duration?: string;
  description?: string;
  skills?: string[];
  url?: string;
}

export type IAboutDataOptional = {
  text?: string[];
};

export interface IProjectDataOptional {
  image?: string;
  title?: string;
  description?: string;
  skills?: string[];
  url?: string;
}

export interface IUserOptional {
  name?: string;
  password?: string;
}

type TValidateData = (
  data:
    | IProjectDataOptional
    | IAboutDataOptional
    | ICertificateDataOptional
    | IUserOptional
) => boolean;

export const validateData: TValidateData = data => {
  if (!data) return false;

  let isValid = true;

  const values = Object.values(data);

  values.forEach(value => {
    if (typeof value === 'string' && !validateString(value)) {
      isValid = false;
    } else if (Array.isArray(value) && !validateArray(value)) {
      isValid = false;
    }
  });

  return isValid;
};

export const validateString = (str: string | undefined) => {
  if (!str || !str.trim().length) {
    return false;
  }
  return true;
};

export const validateArray = (arr: string[] | undefined) => {
  if (!arr || arr.length === 0 || (arr.length === 1 && !arr[0].trim().length)) {
    return false;
  }
  return true;
};
