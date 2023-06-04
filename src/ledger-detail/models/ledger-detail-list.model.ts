import { Field, ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/binary';
import { GraphQLString } from 'graphql/type';

@ObjectType()
export class LedgerDetailList {
  dateNumber: number;

  weekDay: number;

  detailType: number;

  @Field(() => GraphQLString)
  amountSum: Decimal | null;
}
