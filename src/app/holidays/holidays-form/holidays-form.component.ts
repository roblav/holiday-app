import { Component, OnInit } from '@angular/core';

import { Holiday } from '../holiday.model'

@Component({
  selector: 'app-holidays-form',
  templateUrl: './holidays-form.component.html',
  styleUrls: ['./holidays-form.component.css']
})
export class HolidaysFormComponent implements OnInit {

  holiday: Holiday = new Holiday();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.holiday)
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.holiday); }
  
}
