/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdateProductoDto extends PartialType(CreateProductoDto) {}
