import { Component, OnInit } from '@angular/core';
import { Holiday } from '../holiday.model'

@Component({
  selector: 'app-holidays-list',
  templateUrl: './holidays-list.component.html',
  styleUrls: ['./holidays-list.component.css']
})
export class HolidaysListComponent implements OnInit {
  
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

  holidays: Holiday[] = [this.holiday1, this.holiday2]

  constructor() { }

  ngOnInit() {
  }

}
