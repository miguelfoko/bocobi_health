import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { TestgetPage } from '../testget/testget';
import { TextConsultationPage } from '../text-consultation/text-consultation';
import { UserconnectePage } from '../userconnecte/userconnecte';
// import { UserconnectePage } from '../userconnecte/userconnecte';

/**
 * Generated class for the ParametrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parametre',
  templateUrl: 'parametre.html',
})
export class ParametrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametrePage');
  }
toggleTheme(event: { detail: { checked(); }; }){
  if(event.detail.checked){
   document.body.setAttribute('color-theme','dark')
 }
}
profil(){
  this.navCtrl.push(ProfilPage)
}

userconnect(){
  this.navCtrl.push(TextConsultationPage)
}

bmw(){
  this.navCtrl.push(TestgetPage)
}

hyj(){
  this.navCtrl.push(UserconnectePage)
}
}