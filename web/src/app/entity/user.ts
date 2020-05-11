export class User {

  static ADMIN = 3;
  static MANAGE = 2;
  static FRONT = 1;
  static CUSTOM = 0;

  id: number;

  name: string;

  sex: boolean;

  username: string;

  password: string;

  authority: number;
}
