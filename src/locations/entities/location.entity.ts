import { Employee } from "src/employees/entities/employee.entity";
import { Manager } from "src/managers/entities/manager.entity";
import { Region } from "src/regions/entities/region.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationID: number;
    @Column('text')
    locationName: string;
    @Column('text')
    locationAddress: string;
    @Column('simple-array')
    locationLatLng: number[];


    @OneToOne(() => Manager)
    @JoinColumn()
    manager: Manager;

    @ManyToOne(() => Region, (region) => region.locations)
    region: Region;

    @OneToMany(() => Employee, Employee => Employee.location)
    employees: Employee[];
}
