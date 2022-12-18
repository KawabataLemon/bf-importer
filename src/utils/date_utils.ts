import { format, addDays, parse, isDate } from 'date-fns';

class DateUtils {
  generateRangeStrings(from: Date, to: Date) {
    let fromDate = from;
    let toDate = to;
    if (from > to) {
      fromDate = to;
      toDate = from;
    }

    const today = new Date();
    if (toDate > today) {
      toDate = today;
    }

    let days: Date[] = [fromDate];
    let day = addDays(fromDate, 1)
    while(true) { 
      if (toDate >= day) {
        days.push(day);
        day = addDays(day, 1)
      } else {
        break;
      }
    }

    return days.map(this.formatDate)
  }

  formatDate(date: Date): string {
    return format(date, 'yyyy-MM-dd')
  }

  dateFromString(dateStr: string) {
    return parse(dateStr, 'yyyy-MM-dd', new Date())
  }

  checkFormattableString(dateStr: string) {
    return isDate(dateStr);
  }
}

const utils = new DateUtils();

export {
  utils
}