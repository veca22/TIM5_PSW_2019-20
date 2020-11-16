import {DateTime} from 'luxon';


export class Interval {
  id: number;
  startTime: string;
  endTime: string;

  constructor(starTime: string, endTime: string, id?: number) {
    this.id = id;
    this.startTime = starTime;
    this.endTime = endTime;

  }

}
