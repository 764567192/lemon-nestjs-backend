import { Args, Query, Resolver } from '@nestjs/graphql';
import { LedgerDetailService } from './ledger-detail.service';
import { DetailCard } from './models/detail-card.model';

@Resolver(() => DetailCard)
export class DetailCardResolver {
  constructor(private readonly ledgerDetailService: LedgerDetailService) {}

  /**
   * 详情页 - 卡片数据
   * @param createMonth 月份
   */
  @Query(() => [DetailCard])
  async detailCard(@Args('createMonth') createMonth: number) {
    return this.ledgerDetailService.findDetailCard(createMonth);
  }
}
