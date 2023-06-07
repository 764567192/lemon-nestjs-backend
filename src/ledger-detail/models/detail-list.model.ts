import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DetailList {
  dateNumber: number;

  createWeekDay: number;
}
