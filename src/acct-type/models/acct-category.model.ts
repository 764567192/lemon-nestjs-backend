import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class AcctCategory {
  @Field(() => GraphQLBigInt)
  id: bigint;
  @Field(() => GraphQLBigInt)
  acctTypeId: bigint;
  name: string;
  icon: string;
  @Field(() => GraphQLBigInt)
  sort: bigint;
}
