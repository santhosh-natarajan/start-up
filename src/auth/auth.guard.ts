/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private jwtService:JwtService) { }
  
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromRequest(request);
    if(!token) { 
      throw new UnauthorizedException();
    } else { 
      try {
        const payload = this.jwtService.verifyAsync(token, {secret:'test'});
        request['user'] = payload;
      } catch (error) {
        throw new UnauthorizedException();
      }
    }
    return true;
  }

  private extractTokenFromRequest(request:Request) { 
    const token = request.headers?.authorization.split(' ')[1];
    return token;
  }


}
