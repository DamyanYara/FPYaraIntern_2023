import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  //   async validate(username: string, password: string): Promise<any> {
  //     const user = await this.authService.validateUser(username, password); //validateUser checks if the user exists and if the password is correct

  //     if (!user) {
  //       throw new UnauthorizedException('Invalid user credentials');
  //     }
  //     return user;
  //   }
}
