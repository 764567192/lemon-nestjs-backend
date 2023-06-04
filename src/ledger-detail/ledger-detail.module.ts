import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LedgerDetailService } from './ledger-detail.service';
import { LedgerDetailListResolver } from './ledger-detail-list.resolver';
import { LedgerDetailResolver } from './ledger-detail.resolver';
import { DetailCategoryService } from '../detail-category/detail-category.service';

@Module({
  providers: [
    LedgerDetailResolver,
    LedgerDetailListResolver,
    LedgerDetailService,
    DetailCategoryService,
  ],
  imports: [PrismaModule],
})
export class LedgerDetailModule {}
