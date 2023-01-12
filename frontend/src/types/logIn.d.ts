export interface LogInForm {
  email: string;
  password: string;
}

export interface LogInFormSuccess {
  message: string;
  token: string;
}

export interface LogInFormError {
  details: string;
}
