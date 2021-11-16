import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

let apiUrl = 'http://192.168.1.140:9090/createPatient';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

private apiUrl='http://192.168.1.140:9090/createPatient';

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl+'login', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            // resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        this.http.post(apiUrl, JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            // resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new HttpHeaders();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(apiUrl+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }
  getCompte():Observable<Response>{
    return this.http.get<Response>(this.apiUrl);
  }
}
