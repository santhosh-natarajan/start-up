/* eslint-disable prettier/prettier */
import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    console.log('Logger', req.body);
    next();
  }
}
