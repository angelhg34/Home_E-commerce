/* eslint-disable prettier/prettier */
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

export enum Estado{
    'Disponible',
    'Agotado',
    'Descontinuado'
}

@Entity('productos')
export class Producto {

    @Column('int')
    @PrimaryGeneratedColumn()
    codigo_producto

    @Column('varchar',{length:20})
    nombre

    @Column('varchar',{length:20})
    descripcion

    @Column('int')
    stock

    @Column('int')
    precio

    @Column('varchar',{length:255})
    imagen

    @Column({ type: 'enum', enum: Estado, default: Estado.Disponible })
    estado: Estado;
}


