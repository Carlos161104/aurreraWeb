import { IsEmail, IsNumber, IsObject, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Manager } from "../entities/manager.entity";
import { Location } from "src/locations/entities/location.entity"

export class CreateManagerDto extends Manager{
    @IsString()
    @MaxLength(80)
    managerFullName: string;
    @IsNumber()
    salary: number;
    @IsString()
    @IsEmail()
    managerEmail: string;
    @IsString()
    @MaxLength(15)
    @MinLength(10)
    managerPhone: string;
    @IsObject()
    @IsOptional()
    location: Location;
}
