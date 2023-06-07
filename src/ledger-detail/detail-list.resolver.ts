import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { DetailList } from './models/detail-list.model';
import { LedgerDetail } from './models/ledger-detail.model';
import { LedgerDetailService } from './ledger-detail.service';
import { DetailType } from './models/detail-type.model';

@Resolver(() => DetailList)
export class DetailListResolver {
  constructor(private readonly ledgerDetailService: LedgerDetailService) {}

  /**
   * 详情页 - 列表数据
   * @param first 查询条数
   * @param after 偏移条数
   * @param createMonth 月份
   */
  @Query(() => [DetailList])
  async detailList(
    @Args('first') first: number,
    @Args('offset') after: number,
    @Args('createMonth') createMonth: number,
  ) {
    return this.ledgerDetailService.findDetailList(first, after, createMonth);
  }

  /**
   * 详情页 - 列表数据 - 明细类型 detailType 字段解析器
   * @param detailList
   */
  @ResolveField(() => [DetailType])
  async detailTypes(@Parent() detailList: DetailList) {
    const { dateNumber } = detailList;
    return this.ledgerDetailService.findLedgerDetailByDetailType(dateNumber);
  }

  /**
   * 详情页 - 列表数据 - 日期 dateNumber 字段解析器
   * @param detailList
   */
  @ResolveField(() => [LedgerDetail])
  async ledgerDetails(@Parent() detailList: DetailList) {
    const { dateNumber } = detailList;
    return this.ledgerDetailService.findLedgerDetailByDateNumber(dateNumber);
  }
}
