import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location]),
    AuthModule, // Importa AuthModule
  ],
  providers: [LocationsService],
  controllers: [LocationsController],
})
export class LocationsModule {}
