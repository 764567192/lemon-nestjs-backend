import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DetailType {
  detailType: number;

  amountSum: string;
}
