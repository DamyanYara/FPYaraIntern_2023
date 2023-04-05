import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
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
  // login the user, takes user info and token and returns token and user object
  public async login(user) {
    const token = await this.generateToken(user);
    return { user, token };
  }

  public async create(user) {
    const pass = await this.hashPassword(user.password); //hash the pass

    const newUser = await this.usersService.create({ ...user, password: pass }); //create user

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = newUser['dataValues'];

    const token = await this.generateToken(result); //generate token

    return { user: result, token };
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }
  // check the database with the provided from user password if match returs true
  private async comparePassword(enteredPassword, dbPassword) {
    const passwordMatch = await bcrypt.compare(enteredPassword, dbPassword);
    return passwordMatch;
  }
}
