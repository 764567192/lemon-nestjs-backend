import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLBigInt } from 'graphql-scalars';
import { GraphQLBoolean } from 'graphql/type';

export function PaginationResult<T>(ItemType: Type<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class Edge<T> {
    @Field(() => ItemType)
    node: T;

    @Field(() => GraphQLBigInt)
    cursor: bigint;
  }

  @ObjectType({ isAbstract: true })
  abstract class PageInfo {
    @Field(() => GraphQLBoolean)
    hasNextPage: boolean;

    @Field(() => GraphQLBigInt, { nullable: true })
    endCursor: bigint | undefined;
  }

  @ObjectType({ isAbstract: true })
  abstract class Page {
    @Field(() => [Edge<T>])
    edges: Edge<T>[];

    @Field(() => PageInfo)
    pageInfo: PageInfo;
  }

  return Page;
}
