export enum ERequestStatus {
  PENDING,
  SUCCESS,
  ERROR,
}

export enum EErrorMessage {
  DATA = 'There was an error retrieving the data.',
  CONNECT = 'There was an error connecting to the database.',
  DISCONNECT = 'There was an error disconnecting from the database.',
  INPUT = 'Invalid input.',
  NOT_FOUND = 'Not found.',
  NO_USER = 'User not found.',
  CREDENTIALS = 'Credentials are invalid.',
  PASSWORD = 'Invalid password',
}

export enum EProviders {
  CREDENTIALS = 'credentials',
}
