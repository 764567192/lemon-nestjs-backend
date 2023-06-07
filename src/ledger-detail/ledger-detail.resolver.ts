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

  /**
   * 详情页 - 列表数据 - 记账明细分类 detailCategoryId 字段解析器
   * @param ledgerDetail
   */
  @ResolveField(() => DetailCategory)
  async detailCategory(@Parent() ledgerDetail: LedgerDetail) {
    const { detailCategoryId } = ledgerDetail;
    return this.detailCategoryService.findDetailCategoryById(detailCategoryId);
  }
}
