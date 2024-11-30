export type IRegistrationErrors = {
  hasErrors?: string;
};

export type RegistrationResponse = {
  hasErrors: boolean;
  errors?: IRegistrationErrors;
};

export type RegistrationRequest = {
  name: string;
  email?: string;
  password?: string;
};
