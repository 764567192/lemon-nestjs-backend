import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { DetailCategoryResolver } from './detail-category.resolver';
import { DetailCategoryService } from './detail-category.service';

@Module({
  providers: [DetailCategoryResolver, DetailCategoryService],
  imports: [PrismaModule],
  exports: [DetailCategoryService],
})
export class DetailCategoryModule {}
