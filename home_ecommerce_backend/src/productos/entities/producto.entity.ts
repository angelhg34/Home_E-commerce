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

    @Column('varchar',{length:255})
    nombre

    @Column('varchar',{length:255})
    descripcion

    @Column('int')
    stock

    @Column('int')
    precio

    @Column('varchar',{length:255})
    imagen

    @Column({name:'estado'
        ,type:"enum",
        enum:[ 'Disponible',
            'Agotado',
            'Descontinuado']})
    estado
}


