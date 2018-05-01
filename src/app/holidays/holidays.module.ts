import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { HolidaysFormComponent } from './holidays-form/holidays-form.component';
import { HolidaysListComponent } from './holidays-list/holidays-list.component';
import { HolidaysComponent } from './holidays.component';
import { HolidaysSummaryComponent } from './holidays-summary/holidays-summary.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [
    HolidaysFormComponent,
    HolidaysListComponent,
    HolidaysComponent,
    HolidaysSummaryComponent
  ],
  exports: [
    HolidaysFormComponent,
    HolidaysListComponent
  ]
})
export class HolidaysModule { }
