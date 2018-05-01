import { Component, OnInit } from '@angular/core';
import { HolidayDataService } from '../holiday-data.service';

@Component({
  selector: 'app-holidays-summary',
  templateUrl: './holidays-summary.component.html',
  styleUrls: ['./holidays-summary.component.css'],
  providers: [HolidayDataService]
})
export class HolidaysSummaryComponent implements OnInit {

  hoursTaken = 0;
  hoursPending = 0;

  holidayBalance = {
    balanceEndOfLastYear: 11.98,
    periodEndDate: "2018-04-15",
    estimatedBalance: 0,
    estimatedBalanceEOY: 0,
    holidaysPerPeriod: 7.81,
    currentAllowance: 0
  }

  constructor(
    private holidayDataService: HolidayDataService) {
  }

  //Calulate the estBalanceEOY.hours based on periods remaining
  getEstimatedEOY(holidaysTaken, hoursPending) {
    let periodEndDate = new Date(this.holidayBalance.periodEndDate)
    let monthsLeftArray = [7,6,5,4,3,2,1,12,11,10,9,8]
    let monthsLeft = monthsLeftArray.indexOf(periodEndDate.getMonth())
    let periodsLeft = monthsLeft * 2
    if(periodEndDate.getDate() < 16) periodsLeft++
    let periodsTaken = 24 - periodsLeft
    this.holidayBalance.currentAllowance = periodsTaken * this.holidayBalance.holidaysPerPeriod
    this.holidayBalance.estimatedBalance = this.holidayBalance.balanceEndOfLastYear + this.holidayBalance.currentAllowance - holidaysTaken
    //Calculate the Estimated EOY Balance
    let futureAllowance = periodsLeft * this.holidayBalance.holidaysPerPeriod 
    let futureBalance = this.holidayBalance.estimatedBalance + futureAllowance
    this.holidayBalance.estimatedBalanceEOY = futureBalance - hoursPending

    console.log(
      `periodEndDate: ${this.holidayBalance.periodEndDate},
      periodEndDate: ${periodEndDate.getDate()},
      periodsLeft: ${periodsLeft},
      periodsTaken: ${periodsTaken},
      estimatedBalance: ${this.holidayBalance.estimatedBalance},
      holidaysTaken: ${holidaysTaken},
      futureAllowance: ${futureAllowance},
      futureBalance: ${futureBalance},
      hoursPending: ${hoursPending}`)
      
  }

  ngOnInit(){
    // Get the number of holidays for the badge
    this.holidayDataService.getHolidays()
      .subscribe(
        (holidays) => {
          let holidaysTaken = holidays.filter(holiday => (holiday.taken) === true);
          let holidaysPending = holidays.filter(holiday => (holiday.taken) === false);
          this.hoursTaken = holidaysTaken.reduce((acc, cur) => acc + +cur.hoursTaken, 0);
          //console.log(holidaysTaken, holidaysPending);
          //console.log(holidaysPending.reduce((acc, cur) => acc + +cur.hoursTaken, 0));
          this.hoursPending = holidaysPending.reduce((acc, cur) => acc + +cur.hoursTaken, 0);
          this.getEstimatedEOY(this.hoursTaken, this.hoursPending);
        }
    );

    
    // Get holidays taken
  }

}
