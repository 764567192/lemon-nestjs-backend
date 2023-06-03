import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DetailCategory } from './models/detail-category.model';

@Injectable()
export class DetailCategoryService {
  constructor(private prisma: PrismaService) {}

  async findAllByType(detailType: number): Promise<DetailCategory[]> {
    return await this.prisma.detailCategory.findMany({ where: { detailType } });
  }
}
