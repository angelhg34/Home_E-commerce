/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'r123',
      database: 'home_ecommerce',
      entities: [],
      synchronize: true,
      autoLoadEntities:true,
      // dropSchema:true
    }),   
    ProductosModule],  

  controllers: [],
  providers: [],
})
export class AppModule {}
