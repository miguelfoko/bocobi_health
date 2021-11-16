// import { Time } from '@angular/common';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserconnectePage } from '../userconnecte/userconnecte';
// import { Observable } from 'rxjs/Observable';
// import { HTTP } from '@ionic-native/http/ngx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import { RestProvider } from './../../providers/rest/rest';

/**
 * Generated class for the AbonnementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-abonnement',
  templateUrl: 'abonnement.html',
})
export class AbonnementPage {
  // [x: string]: any;

  // libelle: string;
  // date: Date;
  // heure: Time;
  // periode: number;
  // duree: number;
  // prix: number;
  // id: string;
  
  // private abonnements: AbonnementPage[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    // private http: HttpClient, 
    ) { //public restProvider: RestProvider
  //     this.readAPI("http://l92.168.1.161:8080/student")
  //   .subscribe((data) => {
  //   console.log(data);
  // });
  
    // Object.assign(this, values);values: Object={}, 
    //   this.restProvider.getAbonnement().subscribe((abonnements : AbonnementPage[])=>{ 
    //     this.abonnements = abonnements;
    //     }); 
    // }

    // onCreateAbonnementPage(abonnement) { 
    //   this.restProvider 
    //   .createAbonnementPage(abonnement) 
    //   .subscribe( 
    //   (newAbonnementPage) => { 
    //   this.abonnements = this.abonnements.concat(newAbonnementPage); 
    //   } 
    //   ); 
//     this.movieApiUrl = 'http://l92.168.1.161:8080/student';
// this.readAPI(this.movieApiUrl)
//   .subscribe((data) => {
//   console.log(data);
//   this.movieData.title = data['Title'];
//   this.movieData.description = data['Plot'];
//   this.movieData.imageUrl = data['Poster'];
// });
  }


  //   onUpdateAbonnementPage(abonnement) { 
  //     this.restProvider 
  //     .updateAbonnementPage(abonnement) 
  //     .subscribe( 
  //     (updatedAbonnementPage) => { 
  //     /* You can assign back the updated abonnement to the model holding the form's product*/
  //     } 
  //     ); 
  //     } 


  //     onRemoveAbonnementPage(abonnement) { 
  //       this.restProvider 
  //       .deleteAbonnementPageById(abonnement.id) 
  //       .subscribe( 
  //       () => { 
  //       this.abonnements = this.abonnements.filter((e) =>  e.id !== abonnement.id); 
  //       } 
  //       ); 
  //       } 


  ionViewDidLoad() {
    console.log('ionViewDidLoad AbonnementPage');
  }
  showDetails() {
    this.navCtrl.push(UserconnectePage)
  }
  
  // searchMovie() {
  //   console.log('recherche du film ' + encodeURIComponent(this.searchTitle).trim());
  //   const search = encodeURIComponent(this.searchTitle).trim();
  //   this.movieApiUrl = 'http://l92.168.1.161:8080/student' + search;
  //   this.readAPI(this.movieApiUrl)
  //     .subscribe((data) => {
  //     console.log(data);
  //     this.movieData.title = data['Title'];
  //     this.movieData.description = data['Plot'];
  //     this.movieData.imageUrl = data['Poster'];
  //   });
  // }
}