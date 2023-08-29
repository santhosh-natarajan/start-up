import { Controller, Get, Req, Post, HttpCode } from '@nestjs/common';
import { Request } from 'express';

@Controller('register')
export class RegisterController {
  @Get('/')
  getAllReq() {
    return 'Get all';
  }

  @Post('/post')
  @HttpCode(201)
  postRequest(@Req() request: Request) {
    return `Req ${request}`;
  }
}
