import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // Validate method in local strategy by using email, username and password
  //@UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req) {
    //userCredentials: userCredentials
    //
    return this.authService.login(req.body);
  }
  // creating User and return JWT token
  @Post('signup')
  async signUp(@Body() user: UserDto) {
    console.log(user);
    return await this.authService.create(user);
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
//interface userCredentials {
//name: string;
//paswword: string;
//}
