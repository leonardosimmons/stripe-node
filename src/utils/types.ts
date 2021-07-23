
export type AccessToken = {
  readonly token: string;
};

export type Combinable = string | number;

export type HttpError = Error & {
  statusCode?: number;
  log?: string;
};
