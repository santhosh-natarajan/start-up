/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entity/customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
    
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>
    ) { }

    async createCustomer(customerData:CustomerDto) {
        const newCustomer = this.customerRepository.create(customerData);
        await this.customerRepository.save(newCustomer);
    }

    async findAll():Promise<Customer[]> {
        return await this.customerRepository.find();
     }

    async find(id: number) {
        return this.customerRepository.findOne({where:{id}})
     }

    async update(id: number, updatedDataDto:CustomerDto) { 
        await this.customerRepository.update(id, updatedDataDto);
        return this.customerRepository.findOne({where: {id}})
    }

    async remove(id: number) {
        return await this.customerRepository.softDelete(id)
     }


}
