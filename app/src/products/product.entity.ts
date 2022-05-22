import { Category } from 'src/categories/category.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

type IntegerBooleanType = 0 | 1;

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  label: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne((type) => Category)
  @JoinColumn([{ name: 'category_id', referencedColumnName: 'id' }])
  category: Category;

  @Column()
  thumbnail_url: string;

  @Column()
  visible_public: IntegerBooleanType;

  @Column()
  visible_authenticated: IntegerBooleanType;
}
