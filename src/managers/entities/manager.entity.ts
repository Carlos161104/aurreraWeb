import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
    //Relacion con location
}
