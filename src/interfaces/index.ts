interface User {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  password?: string;
  investmetyType?: string;
  [key: string]: any;
}
export type { User }