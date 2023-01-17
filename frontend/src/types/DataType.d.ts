export interface DataType {
  email: string;
  password: string;
}

export interface CreateType {
  title: string;
  content: string;
}

export interface UpdateType {
  id: string | undefined;
  title: string | undefined;
  content: string | undefined;
}
