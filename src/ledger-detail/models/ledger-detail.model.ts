import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLString } from 'graphql/type';
import { GraphQLBigInt } from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/binary';
import { CustomGraphqlTimestampScalar } from '../../common/scalars/graphql-timestamp.scalar';

@ObjectType({ description: 'LedgerDetail' })
export class LedgerDetail {
  @Field(() => GraphQLBigInt)
  id: bigint;

  @Field(() => GraphQLBigInt)
  detailCategoryId: bigint;

  detailType: number;

  @Field(() => GraphQLString)
  amount: Decimal;

  @Field(() => GraphQLString, { nullable: true })
  remark?: string | null;

  @Field(() => CustomGraphqlTimestampScalar)
  createTime: Date;

  @Field(() => CustomGraphqlTimestampScalar)
  updateTime: Date;
}
