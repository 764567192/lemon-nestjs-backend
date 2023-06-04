import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerDetail } from './models/ledger-detail.model';
import { NewLedgerDetailInput } from './dto/new-ledger-detail.input';
import { DateUtil } from '../util/date.util';
import { LedgerDetailInput } from './dto/ledger-detail.input';
import { LedgerDetailList } from './models/ledger-detail-list.model';
import { Prisma } from '@prisma/client';

@Injectable()
export class LedgerDetailService {
  constructor(private prisma: PrismaService) {}

  async findAll(ledgerDetailInput: LedgerDetailInput): Promise<LedgerDetail[]> {
    return await this.prisma.ledgerDetail.findMany({
      where: ledgerDetailInput,
    });
  }

  async findLedgerDetailList(): Promise<LedgerDetailList[]> {
    const result = await this.prisma.ledgerDetail.groupBy({
      by: ['dateNumber', 'weekDay', 'detailType'],
      _sum: {
        amount: true,
      },
      orderBy: {
        dateNumber: 'desc',
      },
    });

    return result.map((v) => ({
      dateNumber: v.dateNumber,
      weekDay: v.weekDay,
      detailType: v.detailType,
      amountSum: v._sum.amount,
    }));
  }

  async findByDateNumber(dateNumber: number): Promise<LedgerDetail[]> {
    return await this.prisma.ledgerDetail.findMany({ where: { dateNumber } });
  }

  async findLedgerDetailById(
    id: Prisma.LedgerDetailWhereUniqueInput,
  ): Promise<LedgerDetail | null> {
    return this.prisma.ledgerDetail.findUnique({
      where: id,
    });
  }

  async create(
    newLedgerDetailData: NewLedgerDetailInput,
  ): Promise<LedgerDetail> {
    return await this.prisma.ledgerDetail.create({
      data: {
        ...newLedgerDetailData,
        year: DateUtil.nowLocal().year,
        month: DateUtil.nowLocal().month,
        day: DateUtil.nowLocal().day,
        weekNumber: DateUtil.nowLocal().weekNumber,
        weekDay: DateUtil.nowLocal().weekday,
        dateNumber: Number(DateUtil.nowLocal().toFormat('yyyyMMdd')),
        createTime: DateUtil.newDateLocalUTC(),
        updateTime: DateUtil.newDateLocalUTC(),
      },
    });
  }
}
