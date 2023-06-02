import { GraphQLScalarType } from 'graphql/type';
import { DateTime } from 'luxon';

export const CustomGraphqlTimestampScalar = new GraphQLScalarType({
  name: 'GraphqlTimestamp',
  serialize: (value: Date) => {
    return DateTime.fromJSDate(value)
      .setZone('Asia/Shanghai')
      .toFormat('yyyy-MM-dd HH:mm:ss');
  },
});
