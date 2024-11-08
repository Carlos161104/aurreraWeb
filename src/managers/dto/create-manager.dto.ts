import { IsEmail, IsNumber, IsObject, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Manager } from "../entities/manager.entity";
import { Location } from "src/locations/entities/location.entity"
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateManagerDto extends Manager{
    @ApiProperty()
    @IsString()
    @MaxLength(80)
    managerFullName: string;

    @ApiProperty()
    @IsNumber()
    salary: number;

    @ApiProperty()
    @IsString()
    @IsEmail()
    managerEmail: string;

    @ApiProperty()
    @IsString()
    @MaxLength(15)
    @MinLength(10)
    managerPhone: string;

    @ApiPropertyOptional()
    @IsNumber()
    @IsOptional()
    location: Location;
}
