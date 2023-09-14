/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtService, JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  imports: [
    JwtModule.register({
      global:true,
      secret: 'test',
      signOptions: {expiresIn: '60s'}
    })
  ]
})
export class AuthModule {}
