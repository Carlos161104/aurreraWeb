import { ApiProperty } from "@nestjs/swagger";
import { Employee } from "src/employees/entities/employee.entity";
import { Manager } from "src/managers/entities/manager.entity";
import { Region } from "src/regions/entities/region.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationID: number;

    @ApiProperty({
        default: 'San Juan'
    })
    @Column('text')
    locationName: string;

    @ApiProperty({
        default: 'Av.Universidad s/n, 54253, San Juan, Mex, Mex'
    })
    @Column('text')
    locationAddress: string;

    @ApiProperty({
        default: [19.5572,-99.0502]
    })
    @Column('simple-array')
    locationLatLng: number[];

    @ApiProperty({default: '1baksjfkjds1-123jaksdhfjds-1jadsf'})
    @OneToOne(() => Manager, {
        eager: true
    })
    @JoinColumn()
    manager: Manager | string;

    @ManyToOne(() => Region, (region) => region.locations)
    region: Region;

    @OneToMany(() => Employee, Employee => Employee.location)
    employees: Employee[];
}
