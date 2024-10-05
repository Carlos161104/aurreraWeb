import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "src/locations/entities/location.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Region {
    @PrimaryGeneratedColumn('increment')
    regionId: number;

    @ApiProperty({
        default: 'Nombre de la región',
    })
    @Column({
        type: 'text',
        unique: true,
    })
    regionName: string;

    @ApiProperty({
        default: ['Activo'],
    })
    @Column('simple-array')
    regionStates: string[];

    @OneToMany(() => Location, location => location.region)
    @JoinColumn({
        name: 'regionId'
    })
    locations: Location[];
}
