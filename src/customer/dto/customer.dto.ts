/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CustomerDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  phonenumber: string;
}
