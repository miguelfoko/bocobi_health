import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicamentsPostPage } from '../medicaments-post/medicaments-post';

/**
 * Generated class for the UserconnectePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userconnecte',
  templateUrl: 'userconnecte.html',
})
export class UserconnectePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserconnectePage');
  }

  openListUsers() {
    this.navCtrl.push('UserListPage');
  }

  expression(){
    this.navCtrl.push(MedicamentsPostPage)
  }

}
