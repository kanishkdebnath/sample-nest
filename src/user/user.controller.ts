import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.model';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  getUsers(@Query('role') role: string) {
    return this.service.getUsers(role);
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.service.getUserById(id);
  }

  @Post()
  saveUser(@Body() userDTO: UserDTO) {
    return this.service.saveUser(userDTO);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.service.removeUser(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userDTO: UserDTO) {
    return this.service.updateUser(id, userDTO);
  }
}
