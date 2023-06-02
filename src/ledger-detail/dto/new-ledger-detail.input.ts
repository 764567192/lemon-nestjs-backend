import { Field, InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/binary';
import { GraphQLString } from 'graphql/type';
import { GraphQLBigInt } from 'graphql-scalars';

@InputType()
export class NewLedgerDetailInput {
  @Field(() => GraphQLBigInt)
  acctTypeId: bigint;

  @Field(() => GraphQLString)
  amount: Decimal;

  remark?: string;
}
