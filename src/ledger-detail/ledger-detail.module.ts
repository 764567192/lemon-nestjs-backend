import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LedgerDetailResolver } from './ledger-detail.resolver';
import { LedgerDetailService } from './ledger-detail.service';

@Module({
  providers: [LedgerDetailResolver, LedgerDetailService],
  imports: [PrismaModule],
})
export class LedgerDetailModule {}
