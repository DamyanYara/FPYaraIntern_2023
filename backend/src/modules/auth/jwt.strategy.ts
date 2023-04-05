import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //extracting JWT from the request
      ignoreExpiration: false, //
      secretOrKey: process.env.JWTKEY, // secret key defined in the env file
    });
  }
  async validate(payload: any) {
    const user = await this.userService.findOneById(payload.id); //confirming if the user with a valid token exists
    if (!user) {
      throw new UnauthorizedException('Not Authorized');
    }
    return payload;
  }
}
