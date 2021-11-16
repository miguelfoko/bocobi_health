import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { ServicesHttpProvider } from '../../providers/services-http/services-http';
import { ApiProvider } from '../../providers/api/api';
import { Observable } from 'rxjs';
import { Activity } from '../../app/types';

/**
 * Generated class for the TestgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 

@IonicPage()
@Component({
  selector: 'page-testget',
  templateUrl: 'testget.html',
})
export class TestgetPage {
  
  activitylist: Observable<Activity[]>;
  users: any[];
  skipMsg: string="Skip";
  datauser: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http: ServicesHttpProvider, public api: ApiProvider) {
      
      this.activitylist = api.getActivities();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestgetPage');
  }

  listdesusers(){
    this.http.loadUsers().then(
      (res: any) => {
        this.users = res.results;
      },
      (error) =>{
        console.error(error);
      }
    );
  }

ngOnInit(){
  this.getDataUser();
}

async getDataUser() {
    await this.api.getDataUser()
    .subscribe(res => {
      console.log(res);
      this.datauser = res.results;
      console.log(this.users);
    }, err => {
      console.log(err);
    })
  }
}
