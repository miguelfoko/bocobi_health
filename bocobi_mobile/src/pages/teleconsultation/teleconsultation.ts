import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookAppointmentPage } from '../book-appointment/book-appointment';
import { VideoConsultationPage } from '../video-consultation/video-consultation';

/**
 * Generated class for the TeleconsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teleconsultation',
  templateUrl: 'teleconsultation.html',
})
export class TeleconsultationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeleconsultationPage');
  }
  TeleconsultationPage(){
    this.navCtrl.push(BookAppointmentPage)
  }
  Teleconsult(){
    this.navCtrl.push(VideoConsultationPage)
  }

}
