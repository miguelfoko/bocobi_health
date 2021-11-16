import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PageChatPage } from '../page-chat/page-chat';
import { PatientsDetailsPage } from '../patients-details/patients-details';

/**
 * Generated class for the TextConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-consultation',
  templateUrl: 'text-consultation.html',
})
export class TextConsultationPage {

  public form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder: FormBuilder,) {
      this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextConsultationPage');
  }

  
  nextOnClick() {
    this.navCtrl.push(PatientsDetailsPage);
  }

  liveSupportOnClick() {
    this.navCtrl.push(PageChatPage)
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      username: ['']
    });

  }

}
