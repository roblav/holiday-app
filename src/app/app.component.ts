import { Component, OnInit } from '@angular/core';
import { Holiday } from './holidays/holiday.model';
import { HolidayDataService } from './holidays/holiday-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HolidayDataService]
})

export class AppComponent implements OnInit {
  title = 'app';
  holidaysTakenListed = 0
  holidaysPendingListed = 0


  constructor(
    private holidayDataService: HolidayDataService) {
  }

  ngOnInit(){
    // Get the number of holidays for the badge
    this.holidayDataService.getHolidays()
      .subscribe(
        (holidays) => {
          let holidaysTaken = holidays.filter(holiday => (holiday.taken) === true);
          let holidaysPending = holidays.filter(holiday => (holiday.taken) === false);
          this.holidaysTakenListed = holidaysTaken.length
          this.holidaysPendingListed = holidaysPending.length
        }
    );
    // Get holidays taken
  }

  get holidays() {
    return this.holidayDataService.getHolidays();
  }

}

