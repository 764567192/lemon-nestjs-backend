import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLString } from 'graphql/type';
import { Decimal } from '@prisma/client/runtime/binary';

@ObjectType()
export class DetailCard {
  createMonth: number;

  detailType: number;

  @Field(() => GraphQLString)
  amountSum: Decimal | null;
}
