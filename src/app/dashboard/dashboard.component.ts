import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <nav>
      <a class="btn btn-info" [routerLink]="['/home']" role="button">Home</a>
      <a class="btn btn-info" [routerLink]="['/holidays/add']" role="button">Add Holiday</a>
      <a class="btn btn-info" [routerLink]="['/holidays', 'pending']" role="button">Pending <span class="badge badge-light">4</span></a>
      <a class="btn btn-info" [routerLink]="['/holidays', 'taken']" role="button">Taken <span class="badge badge-light">4</span></a>
    </nav>
  `
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
