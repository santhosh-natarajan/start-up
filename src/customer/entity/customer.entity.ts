/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Customer { 
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    
    @Column()
    phonenumber:string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;


    
}