import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { BoookmarkModule } from './boookmark/boookmark.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule, BoookmarkModule],
  controllers: [],
})
export class AppModule {}
