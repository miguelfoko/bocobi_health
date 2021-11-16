import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageChatPage } from '../page-chat/page-chat';
import { VideoConsultationResultPage } from '../video-consultation-result/video-consultation-result';

/**
 * Generated class for the VideoConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-consultation',
  templateUrl: 'video-consultation.html',
})
export class VideoConsultationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoConsultationPage');
  }

  consultationSearch() {
    this.navCtrl.push(VideoConsultationResultPage);
  }

  liveSupportOnClick() {
    this.navCtrl.push(PageChatPage)
  }
}
