import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
// import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  skipMsg: string="Skip"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
skip(){
  this.navCtrl.push(DetailPage)
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  SlideChanged(){
  if (this.slides.isEnd())
  this.skipMsg="Merçi"
}
}