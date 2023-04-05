import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  //check if user with provided email exists
  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOneByEmail(username);
    if (!user) {
      return null;
    }
    //check the database with the provided from user password returns user object
    const passwordMatch = await this.comparePassword(pass, user.password);
    if (!passwordMatch) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user['dataValues'];
    return result;
  }
  // check the database with the provided from user password if match returs true
  private async comparePassword(enteredPassword, dbPassword) {
    const passwordMatch = await bcrypt.compare(enteredPassword, dbPassword);
    return passwordMatch;
  }
}
