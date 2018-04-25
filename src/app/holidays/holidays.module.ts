import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { HolidaysFormComponent } from './holidays-form/holidays-form.component';

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
    HolidaysFormComponent
  ],
  exports: [
    HolidaysFormComponent
  ]
})
export class HolidaysModule { }
