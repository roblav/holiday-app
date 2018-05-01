import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HolidaysModule } from './holidays/holidays.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { HomeComponent } from './components/home.component';
import { ApiService } from './api.service';

// import alert service and component
import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    // include alert directive component in app module declarations
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HolidaysModule,
    DashboardModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    // include alert service in app module providers
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
