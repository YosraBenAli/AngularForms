export class User {
  id: number;
  name: string;
  email: string;
  password: {
    pwd: string;
    confirmPwd: string;
  };
  gender: string;
  phone: string;
  terms: boolean;
}
