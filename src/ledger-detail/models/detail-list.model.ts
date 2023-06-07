import { Field, ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/binary';
import { GraphQLString } from 'graphql/type';

@ObjectType()
export class DetailList {
  dateNumber: number;

  createMonth: number;

  detailType: number;

  createWeekDay: number;

  @Field(() => GraphQLString)
  amountSum: Decimal | null;
}
