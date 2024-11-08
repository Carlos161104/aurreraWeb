import { Provider } from "src/providers/entities/provider.entity";
import { Entity, ManyToOne, Column, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    productId: string;

    @ApiProperty({
        default: 'Nombre del producto',
    })
    @Column({ type: 'text' })
    productName: string;

    @ApiProperty({
        default: 0.0,
    })
    @Column({ type: 'float' })
    price: number;

    @ApiProperty({
        default: 0,
    })
    @Column({ type: 'int' })
    countSeal: number;

    @ManyToOne(() => Provider, (provider) => provider.products, {
        eager: true
    })
    @JoinColumn({
        name: 'providerId'
    })
    provider: Provider | string
}
