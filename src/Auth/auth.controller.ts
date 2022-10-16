import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // @RouteConfig('POST', 'auth/login')
  @Post('login')
  login() {
    return 'Im login';
  }
  @Post('signup')
  signup() {
    return 'Im signup';
  }
}
