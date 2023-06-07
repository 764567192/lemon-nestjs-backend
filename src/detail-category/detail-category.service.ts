import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DetailCategory } from './models/detail-category.model';

@Injectable()
export class DetailCategoryService {
  constructor(private prisma: PrismaService) {}

  /**
   * 通过 Id 获取全部数据
   * @param id
   */
  async findDetailCategoryById(id: bigint) {
    return this.prisma.detailCategory.findUnique({
      where: { id },
    });
  }

  async findAllByType(detailType: number): Promise<DetailCategory[]> {
    return await this.prisma.detailCategory.findMany({ where: { detailType } });
  }
}
