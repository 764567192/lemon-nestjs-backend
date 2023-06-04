import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { LedgerDetailService } from './ledger-detail.service';
import { LedgerDetail } from './models/ledger-detail.model';
import { DetailCategory } from '../detail-category/models/detail-category.model';
import { DetailCategoryService } from '../detail-category/detail-category.service';

@Resolver(() => LedgerDetail)
export class LedgerDetailResolver {
  constructor(
    private readonly ledgerDetailService: LedgerDetailService,
    private readonly detailCategoryService: DetailCategoryService,
  ) {}

  @ResolveField(() => DetailCategory)
  async detailCategory(
    @Parent() ledgerDetail: LedgerDetail,
  ): Promise<DetailCategory | null> {
    const { detailCategoryId: id } = ledgerDetail;
    return this.detailCategoryService.findDetailCategoryById({ id });
  }
}
