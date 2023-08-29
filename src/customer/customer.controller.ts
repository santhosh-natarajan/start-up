/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body, UsePipes, ValidationPipe, Get, Param, Patch, Delete } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {

    constructor(private readonly _customer:CustomerService) { }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() CustomerDto: CustomerDto) { 
        return this._customer.createCustomer(CustomerDto)
    }

    @Get('all')
    customerList() { 
        return this._customer.findAll();
    }

    @Get('search/:id')
    customerSearch(@Param('id') id: number) { 
        return this._customer.find(id);
    }

    @Patch(':id')
    customerUpdate(@Param('id') id: number, @Body() updatedCustomerDto:CustomerDto) { 
        return this._customer.update(id, updatedCustomerDto);
    }

    @Delete(':id')
    customerDelete(@Param('id') id: number) { 
       return this._customer.remove(id); 
    }
}
