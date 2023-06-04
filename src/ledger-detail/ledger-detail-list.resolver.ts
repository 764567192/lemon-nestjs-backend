import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LedgerDetailService } from './ledger-detail.service';
import { LedgerDetail } from './models/ledger-detail.model';
import { LedgerDetailList } from './models/ledger-detail-list.model';

@Resolver(() => LedgerDetailList)
export class LedgerDetailListResolver {
  constructor(private readonly ledgerDetailService: LedgerDetailService) {}

  @Query(() => [LedgerDetailList], { name: 'ledgerDetailList' })
  async ledgerDetailList(): Promise<LedgerDetailList[]> {
    return this.ledgerDetailService.findLedgerDetailList();
  }

  @ResolveField(() => [LedgerDetail], { name: 'ledgerDetails' })
  async ledgerDetails(
    @Parent() ledgerDetailList: LedgerDetailList,
  ): Promise<LedgerDetail[]> {
    const { dateNumber } = ledgerDetailList;
    return this.ledgerDetailService.findByDateNumber(dateNumber);
  }
}
