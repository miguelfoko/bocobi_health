import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { DetailPage } from '../detail/detail';
import { AlertController } from 'ionic-angular'
import { UserconnectePage } from '../userconnecte/userconnecte';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  login: string;
  pass: string;
  age: number;

  constructor(public navCtrl: NavController, 
    NavParams: NavParams, 
    private nativeStorage: NativeStorage,
    public alertCtrl: AlertController) {

      this.login = NavParams.get('login');
      this.pass = NavParams.get('pass');
      // this.age = NavParams.get('age');

      console.log(this.login);
      console.log(this.pass);
      console.log(this.age);
  }
  
  public storageIdent() : void {
    this.nativeStorage.setItem('my-identity-card',
     {login: this.login, 
     pass: this.pass,
    //  age: this.age
  })
  .then(() => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
  }
  showDetail (){
    this.navCtrl.push(UserconnectePage)
  }
  skip(){
    this.navCtrl.push(DetailsPage)
  }
  alertAction(): void {
    let alert = this.alertCtrl.create({
      title: 'Attention !',
      subTitle: 'Desolé vous ne pouvez pas encore y avoir accès, bien vouloir vous loger',
      buttons: ['ok'],
    }); console.log("bio");
    alert.present();
}
// public form = [
//   { val: 'Pepperoni', isChecked: true },
//   { val: 'Sausage', isChecked: false },
//   { val: 'Mushroom', isChecked: false }
// ];
 }