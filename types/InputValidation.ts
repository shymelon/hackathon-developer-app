export type InputValidation = {
  key: string;
  isBlank: boolean;
  lengthMin8: boolean;
  hasError: boolean;
  value: string;
  emailTaken?: boolean;
  errorMessage?: string;
};
