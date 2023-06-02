import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LedgerDetail } from './models/ledger-detail.model';
import { NewLedgerDetailInput } from './dto/new-ledger-detail.input';
import { DateUtil } from '../util/date.util';

@Injectable()
export class LedgerDetailService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<LedgerDetail[]> {
    return await this.prisma.ledgerDetail.findMany();
  }

  async create(
    newLedgerDetailData: NewLedgerDetailInput,
  ): Promise<LedgerDetail> {
    return await this.prisma.ledgerDetail.create({
      data: {
        ...newLedgerDetailData,
        createTime: DateUtil.newDateLocalUTC(),
        updateTime: DateUtil.newDateLocalUTC(),
      },
    });
  }
}
