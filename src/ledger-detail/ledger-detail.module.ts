import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { LedgerDetailService } from './ledger-detail.service';
import { LedgerDetailResolver } from './ledger-detail.resolver';
import { DetailListResolver } from './detail-list.resolver';
import { DetailCategoryService } from '../detail-category/detail-category.service';
import { DetailCardResolver } from './detail-card.resolver';

@Module({
  providers: [
    // Resolver
    LedgerDetailResolver,
    DetailListResolver,
    DetailCardResolver,
    // Service
    LedgerDetailService,
    DetailCategoryService,
  ],
  imports: [PrismaModule],
})
export class LedgerDetailModule {}
