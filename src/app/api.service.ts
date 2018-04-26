import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Holiday } from './holidays/holiday.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getHolidays(): Observable<any> {
    console.log(API_URL + '/holidays')
    return this.http.get(API_URL + '/holidays');
    // .map(response => {
    //   const holidays = response.json();
    //   return holidays.map((holiday) => new Holiday(holiday));
    // })
    // .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
