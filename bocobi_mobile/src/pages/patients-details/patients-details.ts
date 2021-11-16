import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextConsultationBookingPage } from '../text-consultation-booking/text-consultation-booking';

/**
 * Generated class for the PatientsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patients-details',
  templateUrl: 'patients-details.html',
})
export class PatientsDetailsPage {

  genders: Array<{ id: string, title: string }> = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other', title: 'Other'}
  ];
  private form: FormGroup;
  public submitted: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  
    this.buildForm();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsDetailsPage');
  }


  validatePasswordAction() {

    this.navCtrl.push(TextConsultationBookingPage);
    this.submitted = true;
    if (!this.form.valid) {
      this.submitted = false;
      return false;
    }


  }

  private buildForm() {

    this.form = this.formBuilder.group({
      full_name: [''],
      age: [''],
      gender: [''],
      weight: [''],
      height: [''],
      address: [''],
      city: ['']
    });

  }

}
