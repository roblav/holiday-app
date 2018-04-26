import { Injectable } from '@angular/core';
import { Holiday } from './holiday.model';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HolidayDataService {

  lastId: number = 0;

  holiday1: Holiday = {
    "taken": true,
    "hoursTaken": 7.5,
    "holidayStart": "2018-03-31T23:00:00.000Z",
    "holidayEnd": "2018-04-01T23:00:00.000Z",
    "description":"Wimbledon"
  }
  holiday2: Holiday = {
    "taken": true,
    "hoursTaken": 7.5,
    "holidayStart": "2018-03-31T23:00:00.000Z",
    "holidayEnd": "2018-04-01T23:00:00.000Z",
    "description":"Family day"
  }

  holidays: Holiday[] = [this.holiday1, this.holiday2];

  constructor(private api: ApiService) { }

  getHolidays(): Observable<Holiday[]> {
    return this.api.getHolidays();
  }

  createHoliday(holiday: Holiday): HolidayDataService {
    if(!holiday.id){
      holiday.id = ++this.lastId
    }
    // Add new holiday to holidays
    this.holidays.push(holiday);
    return this;
  }

  updateHoliday(id) {

  }

  deleteHoliday(id) {

  }


}
