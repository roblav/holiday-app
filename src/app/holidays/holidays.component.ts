import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
import { HolidaysSummaryComponent } from './holidays-summary/holidays-summary.component';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService) { }

    ngOnInit() {
      // Be aware the route params finishes before the getHolidays call
      this.route.queryParams.subscribe(
        params => {
          //console.log(`Params: ${JSON.stringify(params)}`)
          switch(params.message){
            case 'created': this.alertService.success("New Holiday created!");
              break;
            case 'updated': this.alertService.success("Holiday updated!");
              break;
            default: break;
          }
        }
      );
      
    }

}
