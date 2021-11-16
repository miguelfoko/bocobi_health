import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  private API_URL = 'http://192.168.1.140:9090/createPatient'
  private API_URLget='http://192.168.1.140:9090/getPatients'

  constructor(public http: HttpClient) {
    console.log('Hello UsersProvider Provider');
  }


  createAccount(nomUtilisateur: string,
    prenomUtilisateur: string,
    dateNaissance: number,
    lieuNaissance: string,
    lieuResidence: string,
    sexUtilisateur: string,
    adresseMailUtilisateur: string,
    numeroTelephoneUtilisateur: number,
    password: string) {

    return new Promise((resolve, reject) => {
      var data = {
        nomUtilisateur: nomUtilisateur,
        prenomUtilisateur: prenomUtilisateur,
        dateNaissance: dateNaissance,
        lieuNaissance: lieuNaissance,
        lieuResidence: lieuResidence,
        sexUtilisateur: sexUtilisateur,
        adresseMailUtilisateur: adresseMailUtilisateur,
        numeroTelephoneUtilisateur: numeroTelephoneUtilisateur,
        password: password,
      };

      this.http.post(this.API_URL, data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            // reject(error.json());
          });
    });
  }

  login(adresseMailUtilisateur: string, password: string) {
    return new Promise((resolve, reject) => {
      var data = {
        adresseMailUtilisateur: adresseMailUtilisateur,
        password: password
      };

      this.http.post(this.API_URL, data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            // reject(error.json());
          });
    });
  }

  getAll(page: number) {
    return new Promise((resolve, reject) => {

      let url = this.API_URLget + page;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            // reject(error.json());
          });
    });
  }

  get(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URLget ;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            // reject(error.json());
          });
    });
  }

  insert(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/';

      this.http.post(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            // reject(error.json());
          });
    });
  }

  update(user: any) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + user.id;
      // let data = {
      //   "nomUtilisateur": user.nomUtilisateur,
      //   "prenomUtilisateur": user.prenomUtilisateur
      // }

      this.http.put(url, user)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            // reject(error.json());
          });
    });
  }

  remove(id: number) {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'users/' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
          (error) => {
            // reject(error.json());
          });
    });
  }


}
