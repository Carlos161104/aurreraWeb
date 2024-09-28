import { Location } from "src/locations/entities/location.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerID: string;
    @Column('text')
    managerFullName: string;
    @Column('float')
    salary: number;
    @Column('text')
    managerEmail: string;
    @Column('text')
    managerPhone: string;
    

    @OneToOne(() => Location)
    @JoinColumn({
        name: 'ManagerId'
    })
    location: Location;
}
