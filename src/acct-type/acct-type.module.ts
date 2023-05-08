import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AcctTypeResolver } from './acct-type.resolver';
import { AcctTypeService } from './acct-type.service';

@Module({
  providers: [AcctTypeResolver, AcctTypeService],
  imports: [PrismaModule],
})
export class AcctTypeModule {}
