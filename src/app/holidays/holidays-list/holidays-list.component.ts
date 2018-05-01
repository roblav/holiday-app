import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Holiday } from '../holiday.model';
import { HolidayDataService } from '../holiday-data.service';
import { AlertService } from '../../_services/index';

@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.css'],
  providers: [HolidayDataService]
})
export class HolidaysListComponent implements OnInit {

  allHolidays: Holiday[] = [];
  holidays: Holiday[] = [];
  title: String = ""
  taken: Boolean

  totalHours = 0;
  
  constructor(
    private holidayDataService:HolidayDataService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService) {

  }

  ngOnInit() {

    // Be aware the route params finishes before the getHolidays call
    this.route.params.subscribe(
      params => {
        console.log(params)
        if(params.status === 'taken') {
          // Filter holidays - Return only holidays "taken": true
          this.title = "Holidays Taken";
          this.taken = true
          this.holidays = this.allHolidays.filter(holiday => holiday.taken === true)
          this.totalHours = this.holidays.reduce((acc, cur) => acc + +cur.hoursTaken, 0)
        } else {
          this.title = "Holidays Pending";
          this.taken = false
          this.holidays = this.allHolidays.filter(holiday => holiday.taken === false)
          this.totalHours = this.holidays.reduce((acc, cur) => acc + +cur.hoursTaken, 0)
        }
      }
    )

    this.holidayDataService
      .getHolidays()
      .subscribe(
        (holidays) => {
          this.allHolidays = holidays;
          this.holidays = holidays.filter(holiday => (holiday.taken) === this.taken);
        }
    );

  }

  editHoliday(id) {
    //console.log(`Edit ${id}`)
    // Direct the user to the edit form
    this.router.navigate(['holidays/edit', id]);
  }

  deleteHoliday(id) {
    let holiday = this.allHolidays.filter(holiday => holiday.id === id)
    if(confirm(`Are you sure you want to delete ${holiday[0].description}?`)) {
      this.holidayDataService
        .deleteHoliday(id)
        .subscribe(
          (_) => {
            // Reload page to display updated list
            this.alertService.warn("Holiday deleted");
            location.reload();
          }
        );
    }
  }

}
