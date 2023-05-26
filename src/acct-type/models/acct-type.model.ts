import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';

@ObjectType()
export class AcctType {
  @Field(() => GraphQLBigInt)
  id: bigint;
  type: number;
  icon: string;
  iconName: string;
  @Field(() => GraphQLBigInt)
  sort: bigint;
  createTime: Date;
  updateTime: Date;
}
