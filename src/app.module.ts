import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { ProvidersModule } from './providers/providers.module';
import { LocationsModule } from './locations/locations.module';
import { ManagersModule } from './managers/managers.module';
import { RegionsModule } from './regions/regions.module';
import { AuthModule } from './auth/auth.module';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
      host: process.env.host,
      port: +process.env.port,
      username: "postgres",
      password: "contrasenia",
      database: process.env.name,
      entities: [],
      autoLoadEntities: true,
      synchronize: true
  }), EmployeesModule, 
  ProductsModule, ProvidersModule, LocationsModule, ManagersModule, RegionsModule, AuthModule, AwsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
