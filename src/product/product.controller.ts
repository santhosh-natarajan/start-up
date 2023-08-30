/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, ValidationPipe, UsePipes, Param, Patch, Delete } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService) {}

    @Get('all')
    getAllProduct() { 
       return this.productService.find();
    }

    @Get(':id')
    getProductById(@Param('id') id: number) { 
        return this.productService.findOne(id);
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createProduct(@Body() newProductData: ProductDto) { 
        const productData = newProductData;
        productData.sgst = this.calculateSGST(productData.type, productData.price);
        productData.cgst = this.calculateCGST(productData.type, productData.price);
        productData.mrp = this.calculateMRP(productData.sgst, productData.cgst, productData.price);
        return this.productService.createProduct(newProductData);
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    updateProduct(@Param('id') id: number,  @Body() updatedProductDto:ProductDto) { 
        return this.productService.update(id, updatedProductDto)
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: number) { 
        return this.productService.remove(id);
    }

    private calculateSGST = (productType:string, productPrice: number) => { 
        let  sgstAmount = 0;
        if (productType === 'A') {
            return sgstAmount = ((productPrice) * 2.5) / 100;
        } else if (productType === 'B') {
            return sgstAmount = ((productPrice) * 2.5) / 100;
        } else if (productType === 'C') {
            return sgstAmount = ((productPrice) * 2.5) / 100;
        } else {
            return sgstAmount;
        }
    }

    private calculateCGST = (productType:string, productPrice:number) => { 
        let  cgstAmount = 0;
        if (productType === 'A') {
            return cgstAmount = ((productPrice) * 2.5) / 100;
        } else if (productType === 'B') {
            return cgstAmount = ((productPrice) * 2.5) / 100;
        } else if (productType === 'C') {
            return cgstAmount = ((productPrice) * 2.5) / 100;
        } else {
            return cgstAmount;
        }
    }

    private calculateMRP = (sgst:number, cgst:number, price:number) => { 
        return sgst+cgst+price;
    }

}
