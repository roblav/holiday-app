import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../_services/index';
@Component({
  selector: 'app-home',
  template: `<h1 class="h4">Home page</h1>`
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private alertService: AlertService) { }

  // Check the URL params 
  // display the appropriate message

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
