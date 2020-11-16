import {Role} from './role';

export class User {

  email: string;
  password: string;
  role: Role;

  constructor(email: string, password: string, role: Role) {
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public setAll(email: string, password: string, role: Role) {
    this.email = email;
    this.password = password;
    this.role = role;
  }


}
