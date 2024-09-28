import { IsEmail, IsOptional, IsString, Max, MaxLength } from "class-validator";
import { Provider } from "../entities/provider.entity";

export class CreateProviderDto extends Provider{
    @IsString()
    @MaxLength(100)
    roviderName: string;
    @IsEmail()
    @IsString()
    providerEmail: string;
    @IsString()
    @MaxLength(15)
    @IsOptional()
    provaiderPhone: string;
}