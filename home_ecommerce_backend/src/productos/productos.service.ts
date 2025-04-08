/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import {InjectRepository} from '@nestjs/typeorm'
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {

  constructor(@InjectRepository(Producto)
  private productoRepository:Repository<Producto>){}

  create(createProductoDto: CreateProductoDto) {
    const newProduct = this.productoRepository.create(createProductoDto);
    return this.productoRepository.save(newProduct);
  }

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id: number) {
    const product=this.productoRepository.findOneBy({codigo_producto:id})
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if(!product){
      throw new NotFoundException(`No existe el bootcamp con id ${id}`)
    }
    else{
      return product
    }
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const updproduct= await this.productoRepository.findOneBy({codigo_producto:id});
    if(!updproduct){
      throw new NotFoundException(`No se puede actuliazar el bootcamp con id ${id}`)
    }
    this.productoRepository.merge(updproduct,updateProductoDto)
    return this.productoRepository.save(updproduct);
  }

  async remove(id: number) {
    const delproduct=await this.productoRepository.findOneBy({codigo_producto:id})
    if(!delproduct){
      throw new NotFoundException(`No se puede eliminar el bootcamp con id ${id}`)
    }
    this.productoRepository.delete(delproduct);
    return delproduct
  }
}
