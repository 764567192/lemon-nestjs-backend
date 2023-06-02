import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'path';
import { AcctTypeModule } from './acct-type/acct-type.module';
import { LedgerDetailModule } from './ledger-detail/ledger-detail.module';
import { CustomGraphqlTimestampScalar } from './common/scalars/graphql-timestamp.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      subscription: true,
      graphiql: true,
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      resolvers: {
        GraphqlTimestamp: CustomGraphqlTimestampScalar,
      },
    }),
    // 模块
    AcctTypeModule,
    LedgerDetailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
