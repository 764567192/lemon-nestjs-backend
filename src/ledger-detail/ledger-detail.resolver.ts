import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LedgerDetailService } from './ledger-detail.service';
import { LedgerDetail } from './models/ledger-detail.model';
import { NewLedgerDetailInput } from './dto/new-ledger-detail.input';

@Resolver(() => LedgerDetail)
export class LedgerDetailResolver {
  constructor(private readonly ledgerDetailService: LedgerDetailService) {}

  @Query(() => [LedgerDetail])
  async ledgerDetails(): Promise<LedgerDetail[]> {
    return await this.ledgerDetailService.findAll();
  }

  @Mutation(() => LedgerDetail)
  async addLedgerDetail(
    @Args('newLedgerDetailData') newLedgerDetailData: NewLedgerDetailInput,
  ): Promise<LedgerDetail> {
    return await this.ledgerDetailService.create(newLedgerDetailData);
  }
}
