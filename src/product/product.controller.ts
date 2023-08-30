/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {

    @Get()
    getAllProduct() { 
        return "Its return all products";
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createProduct(@Body() newProductData: ProductDto) { 
        console.log("New product data", newProductData);
    }

}
