import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // @RouteConfig('POST', 'auth/login')
  @Post('login')
  login() {
    return this.authService.login();
  }
  @Post('signup')
  signup() {
    return this.authService.signup();
  }
  @Get('me')
  me() {
    return this.authService.me();
  }
}
