import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { CustomGraphqlTimestampScalar } from '../../common/scalars/graphql-timestamp.scalar';

@ObjectType()
export class DetailCategory {
  @Field(() => GraphQLBigInt)
  id: bigint;

  detailType: number;

  icon: string;

  iconName: string;

  @Field(() => GraphQLBigInt)
  sort: bigint;

  @Field(() => CustomGraphqlTimestampScalar)
  createTime: Date;

  @Field(() => CustomGraphqlTimestampScalar)
  updateTime: Date;
}
