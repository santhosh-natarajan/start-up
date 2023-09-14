/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
    
    constructor(private readonly jwtService:JwtService) { }

    async signIn() { 
        const payload = {sub:'test', username:'test'}
        const jwtToken = await this.jwtService.signAsync(payload,{secret:'test'});
        return {jwtToken}
    }

}
    