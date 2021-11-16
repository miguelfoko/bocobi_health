import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextConsultationServiceInterface } from '../../model/TextConsultation';
import { TreatmentCategoryInterface } from '../../model/TreatmentCategory';

/**
 * Generated class for the TextConsultationBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-consultation-booking',
  templateUrl: 'text-consultation-booking.html',
})
export class TextConsultationBookingPage {

  specialist: Array<TreatmentCategoryInterface> = [
    {id: 1, title: "Cardiologue"},
    {id: 2, title: "Dentiste"},
    {id: 3, title: "Dermatologue"},
    {id: 4, title: "Diabetiste"}
  ];
  textConsultationServices: Array<TextConsultationServiceInterface> = [
    {id: 1, text: "demander un Generaliste (1 suivi gratuit)", amount: 250, treatmentCategory: null},
    {id: 2, text: "demander un Specialiste (1 suivi gratuit)", amount: 500, treatmentCategory: this.specialist},
    {id: 3, text: "demander un consultant (1 suivi gratuit)", amount: 1000, treatmentCategory: this.specialist},
  ];
  private form: FormGroup;
  public submitted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public alertController: AlertController) {
      this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextConsultationBookingPage');
  }

  validatePasswordAction() {
    this.submitted = true;
    if (!this.form.valid) {
      this.submitted = false;
      return false;
    }

    this.alertController.create({title: "Hey", message: "Nous allons vous rediriger vers le payement"}).present();


  }

  private buildForm() {

    this.form = this.formBuilder.group({
      promo: ['']
    });

  }

}
