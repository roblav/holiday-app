import { Component, OnInit } from '@angular/core';
import { Holiday } from '../holiday.model'
import { HolidayDataService } from '../holiday-data.service';

@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.css'],
  providers: [HolidayDataService]
})
export class HolidaysListComponent implements OnInit {

  holidays: Holiday[] = [];

  constructor(private holidayDataService:HolidayDataService) { }

  ngOnInit() {
    return this.holidayDataService
      .getHolidays()
      .subscribe(holidays => {
        this.holidays = holidays
      }
    );
  }

}
