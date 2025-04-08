/* eslint-disable prettier/prettier */
// import { Estado } from './../entities/producto.entity';
export class CreateProductoDto {

    readonly codigo_producto:number;

    readonly nombre:string;

    readonly descripcion: string;

    readonly stock:number;

    readonly precio:number;

    readonly imagen:string;

    readonly estado:string;


    
}
