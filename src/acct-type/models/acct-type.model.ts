import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { AcctCategory } from './acct-category.model';

@ObjectType()
export class AcctType {
  @Field(() => GraphQLBigInt)
  id: bigint;
  typeName: string;
  @Field(() => GraphQLBigInt)
  sort: bigint;
  @Field(() => [AcctCategory])
  acctCategories: AcctCategory[];
}
