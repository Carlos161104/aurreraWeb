import { IsEmail, IsOptional, IsString, Max, MaxLength } from "class-validator";
import { Provider } from "../entities/provider.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateProviderDto extends Provider{
    @ApiProperty()
    @IsString()
    @MaxLength(100)
    roviderName: string;

    @ApiProperty()
    @IsEmail()
    @IsString()
    providerEmail: string;

    @ApiPropertyOptional()
    @IsString()
    @MaxLength(15)
    @IsOptional()
    provaiderPhone: string;
}