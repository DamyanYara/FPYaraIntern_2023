import { BadRequestException, Injectable } from '@nestjs/common';
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
      throw new BadRequestException('Wrong credentials');
    }
    //check the database with the provided from user password returns user object
    const passwordMatch = await this.comparePassword(pass, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('Wrong credentials');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { password, ...result } = user['dataValues'];
    // return result;
  }
  // login the user, takes user info and token and returns token and user object
  public async login(user) {
    // check if the user exist
    await this.validateUser(user.username, user.password);
    const token = await this.generateToken(user);
    return { username: user.username, token };
  }
  /*
    const result = await this.validateUser(user.username, user.pass);
    if (result === null) {
      return new BadRequestException();
    }
  */

  //Crerating

  public async create(user) {
    const pass = await this.hashPassword(user.password); //hash the pass

    const userCheck = await this.usersService.findOneByEmail(user.email);
    if (userCheck) {
      return new BadRequestException('This email is not unique');
    }

    const newUser = await this.usersService.create({ ...user, password: pass }); //create user

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    //deconstructoring returning the user without the password
    const { password, ...result } = newUser['dataValues'];

    const token = await this.generateToken(result); //generate token

    return { user: result, token }; //remove token
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
