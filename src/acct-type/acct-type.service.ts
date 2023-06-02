import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AcctType } from './models/acct-type.model';

@Injectable()
export class AcctTypeService {
  constructor(private prisma: PrismaService) {}

  // async findAllByType(type: number): Promise<AcctType[]> {
  //   return await this.prisma.acctType.findMany({ where: { type: type } });
  // }
}
