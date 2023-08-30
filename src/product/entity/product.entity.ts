/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Product { 
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    type:string;

    @Column()
    price: number;

    @Column()
    availableQuantity: number;

    @Column()
    unitWeight:number;

    @Column()
    sgst:number;

    @Column()
    cgst:number;

    @Column()
    mrp:number;
 
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}