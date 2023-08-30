/* eslint-disable prettier/prettier */
import { IsNumber, IsOptional, IsString } from 'class-validator';
export class ProductDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsNumber()
  price: number;

  @IsNumber()
  availableQuantity: number;

  @IsNumber()
  unitWeight: number;

  @IsOptional()
  sgst: number;

  @IsOptional()
  cgst: number;

  @IsOptional()
  mrp: number;
}
