import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return {
      status: 200,
      msg: 'Successfully logged in',
    };
  }
  signup() {
    return {
      msg: 'Successfully signed up',
    };
  }
  me() {
    return {
      status: 200,
      msg: 'Successfully fetched user',
      data: {
        name: 'Nahid',
        role: 'admin',
      },
    };
  }
}
