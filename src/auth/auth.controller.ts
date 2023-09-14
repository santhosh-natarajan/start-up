/* eslint-disable prettier/prettier */

import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService) {}
     @Get()
     signIn() { 
        return this.authService.signIn();
    }
}
