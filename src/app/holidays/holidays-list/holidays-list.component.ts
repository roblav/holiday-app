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

  constructor(private holidayDataService:HolidayDataService) { }

  get holidays() {
    return this.holidayDataService.getHolidays();
  }

  ngOnInit() {
  }

}
