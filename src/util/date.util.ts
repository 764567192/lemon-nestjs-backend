import { DateTime } from 'luxon';

export class DateUtil {
  static newDateLocalUTC = () => {
    const local: DateTime = DateTime.local();
    const rezoned: DateTime = local.setZone('Asia/Shanghai');
    return rezoned.toJSDate();
  };

  static nowLocal = () => {
    const local: DateTime = DateTime.local();
    return local.setZone('Asia/Shanghai');
  };
}
