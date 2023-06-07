import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLString } from 'graphql/type';
import { GraphQLBigInt } from 'graphql-scalars';
import { Decimal } from '@prisma/client/runtime/binary';
import { CustomGraphqlTimestampScalar } from '../../common/scalars/graphql-timestamp.scalar';
import { PaginationResult } from '../../common/models/pagination-result.type';

@ObjectType()
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

  createYear: number;

  createMonth: number;

  createDay: number;

  createWeekNumber: number;

  createWeekDay: number;

  dateNumber: number;

  @Field(() => CustomGraphqlTimestampScalar)
  createTime: Date;

  @Field(() => CustomGraphqlTimestampScalar)
  updateTime: Date;
}
