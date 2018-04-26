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
    return this.http
      .get(API_URL + '/holidays')
      .catch(this.handleError);
  }

  public getHolidayById(id): Observable<Holiday> {
    return this.http
      .get(API_URL + '/holidays/' + id)
      .catch(this.handleError);
  }

  public createHoliday(holiday: Holiday): Observable<Holiday> {
    return this.http
      .post(API_URL + '/holidays', holiday)
      .catch(this.handleError);
  }

  public updateHoliday(holiday: Holiday, id: number): Observable<Holiday> {
    return this.http
      .put(API_URL + '/holidays/' + id, holiday)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
