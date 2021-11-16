import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the BookAppointmentConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-appointment-confirmation',
  templateUrl: 'book-appointment-confirmation.html',
})
export class BookAppointmentConfirmationPage {

  options: any;
  pageReady: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewController: ViewController) {

      if (navParams.data) {
        this.options = navParams.data;
        this.pageReady = true;
        console.log(this.options);
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookAppointmentConfirmationPage');
  }

  confirmOnClick() {
    this.viewController.dismiss({confirm: true});
  }

  cancelOnClick() {
    this.viewController.dismiss({confirm: false});
  }

}
