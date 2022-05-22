import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { InfoJwtAuthGuard } from '../auth/guards/info-jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @UseGuards(InfoJwtAuthGuard)
  @Get()
  @ApiBearerAuth('access-token')
  async index(@Request() req): Promise<Category[]> {
    const isUserLogged = req.user !== null;
    const data = await this.categoriesService.findAll({ isUserLogged });
    return data;
  }
}
