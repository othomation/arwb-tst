import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  index: number;

  @Column()
  label: string;

  @Column()
  description: string;

  @OneToMany((type) => Product, (product) => product.category)
  products: Product[];
}
