export enum ERequestStatus {
  PENDING,
  SUCCESS,
  ERROR,
}

export enum EErrorMessage {
  DB = 'There was an error connecting to the database.',
  INPUT = 'Invalid input.',
  NOT_FOUND = 'Not found.',
  NO_USER = 'User not found.',
  CREDENTIALS = 'Credentials are invalid.',
  PASSWORD = 'Invalid password',
}

export enum EProviders {
  CREDENTIALS = 'credentials',
}
