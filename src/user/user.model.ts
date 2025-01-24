import { randomUUID } from 'crypto';

export class User {
  private id: string;
  private name: string;
  private role: string;

  constructor(name: string, role: string) {
    this.id = randomUUID();
    this.name = name;
    this.role = role;
  }

  getID() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  setName(name: string) {
    this.name = name;
  }

  setRole(role: string) {
    this.role = role;
  }
}

export class UserDTO {
  name: string;
  role: string;
}
