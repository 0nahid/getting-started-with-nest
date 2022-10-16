import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { UserModule } from './user/user.module';
import { BoookmarkModule } from './boookmark/boookmark.module';

@Module({
  imports: [AuthModule, UserModule, BoookmarkModule],
})
export class AppModule {}
