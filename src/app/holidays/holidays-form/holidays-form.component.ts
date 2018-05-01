import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HolidayDataService } from '../holiday-data.service';
import { Holiday } from '../holiday.model'

@Component({
  selector: 'app-holidays-form',
  templateUrl: './holidays-form.component.html',
  styleUrls: ['./holidays-form.component.css'],
  providers: [HolidayDataService]
})
export class HolidaysFormComponent implements OnInit {

  holiday: Holiday = new Holiday();
  editHoliday: Boolean = false;

  constructor(
    private holidayDataService: HolidayDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
        //console.log(params)
        if(params.id){
          this.editHoliday = true;
          // grab the holiday by id
          this.holidayDataService
          .getHolidayById(params.id)
          .subscribe(
            (holiday) => {
              //console.log(holiday);
              this.holiday = holiday;
            }
          )
        } else {
          this.editHoliday = false;
        }
      }
    )
  }

  onSubmit() {
    if(this.editHoliday) {
      // Update holiday
      this.holidayDataService
        .updateHoliday(this.holiday, this.holiday.id)
        .subscribe(
          (newHoliday) => {
            //console.log(newHoliday);
            this.router.navigate(['home'], { queryParams: { message: "updated" } });
          }
        );
    } else {
      // Create holiday
      this.holidayDataService
        .createHoliday(this.holiday)
        .subscribe(
          (newHoliday) => {
            //onsole.log(newHoliday);
            this.router.navigate(['home'], { queryParams: { message: "created" } });
          }
        );
    }

  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.holiday); }
  
}
