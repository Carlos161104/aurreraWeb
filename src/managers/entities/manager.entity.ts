import { User } from "src/auth/entities/user.entity";
import { Location } from "src/locations/entities/location.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerID: string;

    @ApiProperty({
        default: 'John Doe',
    })
    @Column('text')
    managerFullName: string;

    @ApiProperty({
        default: 50000.0,
    })
    @Column('float')
    salary: number;

    @ApiProperty({
        default: 'john.doe@example.com',
    })
    @Column('text')
    managerEmail: string;

    @ApiProperty({
        default: '+1 555-123-4567',
    })
    @Column('text')
    managerPhone: string;


    @OneToOne(() => Location)
    @JoinColumn({
        name: 'locationId'
    })
    location: Location;

    @OneToOne(() => User)
    @JoinColumn({
        name: 'userId'
    })
    user: User;
}
