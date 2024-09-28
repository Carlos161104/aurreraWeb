import { Product } from "src/products/entities/product.entity";
import { Column, OneToMany, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Provider {
    @PrimaryGeneratedColumn('uuid')
    providerId: string;
    @Column('text')
    providerName: string;
    @Column('text')
    providerEmail: string;
    @Column({
         type :'text',
         nullable: true
        })
    provaiderPhone: string;
    @OneToMany(() => Product, (photo) => photo.provider)
    products: Product[]
}
