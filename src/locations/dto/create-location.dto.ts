import { arrayNotEmpty, IsArray, IsString, MaxLength, ArrayNotEmpty, IsObject, IsOptional, IsUUID } from "class-validator";
import { Location } from "../entities/location.entity";
import { Region } from "src/regions/entities/region.entity";
import { Manager } from "src/managers/entities/manager.entity";

export class CreateLocationDto extends Location{
    @IsString()
    @MaxLength(35)
    locationName: string;
    @IsString()
    @MaxLength(160)
    locationAddress: string;
    @IsArray()
    @ArrayNotEmpty()
    locationLatLng: number[];
    @IsObject()
    @IsOptional()
    region: Region;
    @IsUUID()
    @IsOptional()
    manager: string;
}
