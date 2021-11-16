import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../model/User";
import {ProfileSetting} from "../../model/ProflieSetting";

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  user: User = {
    full_name: 'BOCOBI 2',
    profileImage: 'assets/imgs/logo.png',
    coverImage: 'assets/imgs/sample_1.jpg',
    username: '@e-health bocobi2',
    email: 'martinien@gmail.com'
  };

  profileSettings: Array<ProfileSetting> = [
    {text: 'Mon compte', icon: 'md-contact', forwardIcon: true},
    {text: 'Mes questions et reponses', icon: 'md-text', forwardIcon: true},
    {text: 'Ma Video Consultation', icon: 'md-videocam', forwardIcon: true},
    {text: 'Mon Rapport', icon: 'md-document', forwardIcon: true},
    {text: 'Autres', icon: 'md-flask', forwardIcon: true},
    {text: 'Enregistrement', icon: 'md-cloud-download', forwardIcon: true},
    {text: 'Déconnexion', icon: 'md-log-out', forwardIcon: true},
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }

}
