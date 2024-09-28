import { IsEmail, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { Manager } from "../entities/manager.entity";

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
}
