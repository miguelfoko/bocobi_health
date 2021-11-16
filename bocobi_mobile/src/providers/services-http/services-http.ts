import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesHttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesHttpProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServicesHttpProvider Provider');
  }


  loadUsers() {
    return this.http
    .get('http://192.168.1.140:9090/getPatients').toPromise();
  
  }

}
