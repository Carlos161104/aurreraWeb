import { Product } from "src/products/entities/product.entity";
import { Column, OneToMany, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Provider {
    @PrimaryGeneratedColumn('uuid')
    providerId: string;

    @ApiProperty({
        default: 'Nombre del proveedor',
    })
    @Column('text')
    providerName: string;

    @ApiProperty({
        default: 'proveedor@example.com',
    })
    @Column('text', {
        unique: true,
    })
    providerEmail: string;

    @Column({
        type: 'text',
        nullable: true,
    })
    provaiderPhone: string;

    @OneToMany(() => Product, (photo) => photo.provider)
    products: Product[]
}
