import { HttpClient } from '@angular/common/http';
import { AbonnementPage } from '../../pages/abonnement/abonnement';
import { Observable } from 'rxjs';// /observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular';
//, ObservableInput


/*
 Generated class for the RestProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/

export class RestProvider {
    baseUrl: string = "http://l92.168.1.161:8080/student";
    b: Observable<AbonnementPage>
    private httpClient: HttpClient;
    abonnementPage: AbonnementPage;

    constructor(public navCtrl: NavController,
        public navParams: NavParams) {
        console.log('Hello RestProvider Provider');
    }
    // Sending a GET request to /abonnements 
    //  public getAbonnement(): Observable<AbonnementPage[]> {
    //      return this.httpClient
    //          .get(this.baseUrl + '/abonnements')
    //          .map(abonnements => {
    //              return abonnements.map((abonnement: NavController) => new AbonnementPage(abonnement, this.navParams, this.restProvider));
    //          })
    //          .catch((err) => {
    //              console.error(err);
    //              return this.b;
    //          });
    //  }
    // // Sending a POST request to /abonnements 
    // public createAbonnementPage(abonnement: AbonnementPage): Observable<AbonnementPage> {
    //     return this.httpClient
    //         .post(this.baseUrl + '/abonnements', abonnement)
    //         .map(_response => {
    //             return new AbonnementPage(this.navCtrl, this.navParams, this.restProvider);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             return this.b;
    //         });
    // }
    // Sending a GET request to /abonnements/:id 
    // public getAbonnementPageById(abonnementId: number): Observable<AbonnementPage> {
    //     return this.httpClient
    //         .get(this.baseUrl + '/abonnements/' + abonnementId)
    //         .map(response => {
    //             return new AbonnementPage(this.navCtrl, this.navParams, this.restProvider);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //             return this.b;
    //         });
    // }
    // // Sending a PUT request to /abonnements/:id 
    // public updateAbonnementPage(abonnement: AbonnementPage): Observable<AbonnementPage> {
    //     return this.httpClient
    //         .put(this.baseUrl + '/abonnements/' + abonnement.id, abonnement)
    //         .map(() => {
    //             return new AbonnementPage(this.navCtrl, this.navParams, this.restProvider);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //             return this.b;
    //         });
    // }
    // Sending a DELETE request to /abonnements/:id 
    public deleteAbonnementPageById(abonnementId: number) {
        return this.httpClient
            .delete(this.baseUrl + '/abonnements/' + abonnementId)
            .catch((e) => {
                console.error(e);
                return this.b;
            });
    }
}
