import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { join } from 'path';
import { AcctTypeModule } from './acct-type/acct-type.module';

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
    }),
    // 模块
    AcctTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
