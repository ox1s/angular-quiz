import { Pipe, PipeTransform } from '@angular/core';
import { format, isToday, parseISO, isPast } from 'date-fns';

@Pipe({
  name: 'eventStatus'
})
export class EventStatusPipe implements PipeTransform {
  transform(value: string, ..._args: Array<unknown>): string {
    const date = parseISO(value);
    if (isToday(date)) {
      return 'Happening Today';
    } else {
      return isPast(date) ? 'Completed' : format(date, "'Upcoming on: 'MMMM do, yyyy");
    }
  }
}
