import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerDetail } from './models/ledger-detail.model';
import { NewLedgerDetailInput } from './dto/new-ledger-detail.input';
import { DateUtil } from '../util/date.util';
import { Prisma } from '@prisma/client';

@Injectable()
export class LedgerDetailService {
  constructor(private prisma: PrismaService) {}

  /**
   * 详情页 - 卡片数据
   * @param {number} createMonth - 月
   */
  async findDetailCard(createMonth: number) {
    const records = await this.prisma.ledgerDetail.groupBy({
      by: ['createMonth', 'detailType'],
      _sum: { amount: true },
      where: { createMonth },
      orderBy: { detailType: 'desc' },
    });
    return records.map((record) => ({
      createMonth: record.createMonth,
      detailType: record.detailType,
      amountSum: record._sum.amount,
    }));
  }

  /**
   * 详情页 - 列表数据
   * @param first 查询条数
   * @param after 偏移条数
   * @param createMonth 月份
   */
  async findDetailList(first: number, after: number, createMonth: number) {
    const records = await this.prisma.ledgerDetail.groupBy({
      take: first,
      skip: after,
      by: ['dateNumber', 'createMonth', 'createWeekDay', 'detailType'],
      _sum: { amount: true },
      where: { createMonth },
      orderBy: [{ dateNumber: 'desc' }, { detailType: 'asc' }],
    });
    return records.map((record) => ({
      dateNumber: record.dateNumber,
      createMonth: record.createMonth,
      createWeekDay: record.createWeekDay,
      detailType: record.detailType,
      amountSum: record._sum.amount,
    }));
  }

  /**
   * 详情页 - 列表数据 - 日期 dateNumber 字段解析器
   * @param dateNumber
   */
  async findLedgerDetailByDateNumber(dateNumber: number) {
    return this.prisma.ledgerDetail.findMany({
      where: { dateNumber },
      orderBy: { createTime: 'desc' },
    });
  }

  async findDetailsConnection(
    first: number,
    after: undefined | string = undefined,
  ) {
    const take = first + 1;
    const cursor = after ? { id: 1 } : undefined;
    const skip = cursor ? 1 : undefined;
    const records = await this.prisma.ledgerDetail.findMany({
      take: take,
      skip: skip,
      cursor: cursor,
    });

    const hasNextPage = records.length > first;
    if (hasNextPage) records.pop();
    const endCursor =
      records.length > 0 ? records[records.length - 1].id : undefined;

    const edges = records.map((record) => {
      return {
        node: record,
        cursor: record.id,
      };
    });
    return {
      edges: edges,
      pageInfo: {
        endCursor,
        hasNextPage,
      },
    };
  }

  async create(
    newLedgerDetailData: NewLedgerDetailInput,
  ): Promise<LedgerDetail> {
    return await this.prisma.ledgerDetail.create({
      data: {
        ...newLedgerDetailData,
        createYear: DateUtil.nowLocal().year,
        createMonth: DateUtil.nowLocal().month,
        createDay: DateUtil.nowLocal().day,
        createWeekNumber: DateUtil.nowLocal().weekNumber,
        createWeekDay: DateUtil.nowLocal().weekday,
        dateNumber: Number(DateUtil.nowLocal().toFormat('yyyyMMdd')),
        createTime: DateUtil.newDateLocalUTC(),
        updateTime: DateUtil.newDateLocalUTC(),
      },
    });
  }
}
