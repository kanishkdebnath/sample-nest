import { Injectable, NotFoundException } from '@nestjs/common';
import { User, UserDTO } from './user.model';

@Injectable()
export class UserService {
  private users: User[] = [];

  updateUser(id: string, userDTO: any) {
    const index = this.users.findIndex((user) => user.getID() === id);
    if (index === -1) {
      throw new NotFoundException('User not found');
    }
    this.users[index].setName(userDTO.name);
    this.users[index].setRole(userDTO.role);
    return {
      success: true,
      message: `User data updated.`,
      data: this.users[index],
    };
  }

  removeUser(id: string) {
    const user = this.users.find((user) => user.getID() === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    this.users = this.users.filter((user) => user.getID() !== id);
    return { success: true, message: `User: ${user} removed.` };
  }

  saveUser(userDTO: UserDTO) {
    const newUser = new User(userDTO.name, userDTO.role);
    this.users.push(newUser);
    return {
      success: true,
      message: `User data created.`,
      data: newUser,
    };
  }

  getUserById(id: string) {
    const user = this.users.find((user) => user.getID() === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  getUsers(role?: string) {
    if (role) {
      return this.users.filter((user) => user.getRole() === role);
    }
    return this.users;
  }
}
