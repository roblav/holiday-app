import { Component } from '@angular/core';
import { Holiday } from './holidays/holiday.model';
import { HolidayDataService } from './holidays/holiday-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HolidayDataService]
})

export class AppComponent {
  title = 'app';

  constructor(private holidayDataService: HolidayDataService) {
  }

  get holidays() {
    return this.holidayDataService.getHolidays();
  }

}

