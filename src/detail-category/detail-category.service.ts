import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DetailCategory } from './models/detail-category.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class DetailCategoryService {
  constructor(private prisma: PrismaService) {}

  async findAllByType(detailType: number): Promise<DetailCategory[]> {
    return await this.prisma.detailCategory.findMany({ where: { detailType } });
  }

  async findDetailCategoryById(
    detailCategoryWhereUniqueInput: Prisma.DetailCategoryWhereUniqueInput,
  ): Promise<DetailCategory | null> {
    return this.prisma.detailCategory.findUnique({
      where: detailCategoryWhereUniqueInput,
    });
  }
}
