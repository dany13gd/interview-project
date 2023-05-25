import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  constructor() {}

  public getTimesList(): string[] {
    const times = [];
    for (let i = 0; i < 24; i++) {
      if (i < 10) {
        times.push(`0${i}:00`);
        times.push(`0${i}:30`);
      } else {
        times.push(`${i}:00`);
        times.push(`${i}:30`);
      }
    }
    return times;
  }
}
