import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Activity } from '../../app/types';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers : new HttpHeaders({'Content-type': 'application/json'})
};

const apiUrl = "http://192.168.1.122:9090/getPatients"

@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getActivity(activityId: string) : Observable<Activity>{
    return this.http.get<Activity>(apiUrl + "/" + activityId);
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(apiUrl)
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
     `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
// return throwError('something bad happened; please try again latter');
}
private extractData(res: Response) {
  let body = res;
  return body || {};
}

getDataUser(): Observable<any>{
  return this.http.get(apiUrl, httpOptions).pipe(
    map(this.extractData))
    // catchError(this.handleError));
}
}