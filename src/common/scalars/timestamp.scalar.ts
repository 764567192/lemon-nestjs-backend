import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';
import { DateTime } from 'luxon';

@Scalar('Timestamp', () => String)
export class TimestampScalar implements CustomScalar<string, Date> {
  description = 'Date custom scalar type';

  parseValue(value: string): Date {
    return DateTime.fromFormat(value, 'yyyy-MM-dd HH:mm:ss').toJSDate();
  }

  serialize(value: Date): string {
    return DateTime.fromJSDate(value).toFormat('yyyy-MM-dd HH:mm:ss');
  }

  parseLiteral(ast: ValueNode): Date {
    if (ast.kind === Kind.STRING) {
      return DateTime.fromFormat(ast.value, 'yyyy-MM-dd HH:mm:ss').toJSDate();
    }
    return DateTime.now().toJSDate();
  }
}
