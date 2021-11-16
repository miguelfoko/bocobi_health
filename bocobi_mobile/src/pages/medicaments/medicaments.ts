import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TreatmentCategoryInterface } from '../../model/TreatmentCategory';
import { MedicamentsPostPage } from '../medicaments-post/medicaments-post';

/**
 * Generated class for the MedicamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicaments',
  templateUrl: 'medicaments.html',
})
export class MedicamentsPage {
  options: any;

  items: Array<TreatmentCategoryInterface> = [
    {id: 1, title: "Soin des yeux", icon: "md-eye", forwardIcon: true},
    {id: 2, title: "Mode de vie sain", icon: "md-eye", forwardIcon: true},
    {id: 3, title: "Conditions liées", icon: "md-eye", forwardIcon: true},
    {id: 4, title: "Santé Homme", icon: "md-eye", forwardIcon: true},
    {id: 5, title: "Grossesse & Garde d'enfants", icon: "md-eye", forwardIcon: true},
    {id: 6, title: "Psychologie", icon: "md-eye", forwardIcon: true},
    {id: 7, title: "Santé sexuelle", icon: "md-eye", forwardIcon: true},
    {id: 8, title: "Santé de la peau", icon: "md-eye", forwardIcon: true},
    {id: 9, title: "Santé adolescents", icon: "md-eye", forwardIcon: true},
    {id: 10, title: "Santé femme", icon: "md-eye", forwardIcon: true},
    {id: 11, title: "Yoga", icon: "md-eye", forwardIcon: true}
  ];
  public form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,) {
  
    this.buildForm();
    if (navParams.data != undefined) {
      this.options = navParams.data;
    }
  
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicamentsPage');
  }

  healthItemOnClick(item: TreatmentCategoryInterface) {
    this.navCtrl.push(MedicamentsPostPage, item);
  }

  private buildForm() {

    this.form = this.formBuilder.group({
      search: ['']
    });

  }


}
