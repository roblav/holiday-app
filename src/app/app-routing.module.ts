import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HolidaysFormComponent } from './holidays/holidays-form/holidays-form.component';
import { HolidaysListComponent } from './holidays/holidays-list/holidays-list.component';
import { HolidaysSummaryComponent } from './holidays/holidays-summary/holidays-summary.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { HomeComponent } from './components/home.component';


const routes: Routes = [
  { path: 'home', component: HolidaysComponent },
  { path: 'home/:message', component: HolidaysComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'holidays/add', component: HolidaysFormComponent },
  { path: 'holidays/edit/:id', component: HolidaysFormComponent },
  { path: 'holidays/:status', component: HolidaysListComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
