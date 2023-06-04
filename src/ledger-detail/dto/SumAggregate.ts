import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLString } from 'graphql/type';
import { Decimal } from '@prisma/client/runtime/binary';

@ObjectType()
export class SumAggregate {
  @Field(() => GraphQLString)
  amount: Decimal | null;
}
