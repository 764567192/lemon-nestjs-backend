import { Query, Resolver } from '@nestjs/graphql';
import { AcctTypeService } from './acct-type.service';
import { AcctType } from './models/acct-type.model';

@Resolver(() => AcctType)
export class AcctTypeResolver {
  constructor(private readonly acctTypeService: AcctTypeService) {}

  @Query(() => [AcctType])
  async acctTypes(): Promise<AcctType[]> {
    return this.acctTypeService.findAll();
  }
}
