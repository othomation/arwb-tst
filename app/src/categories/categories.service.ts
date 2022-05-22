import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async findAll({ isUserLogged }): Promise<Category[]> {
    return await this.categoriesRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.products', 'product')
      .where(
        `product.visible_${isUserLogged ? 'authenticated' : 'public'} = :state`,
        { state: 1 },
      )
      .getMany();
  }
}
