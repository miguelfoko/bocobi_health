import { Component } from '@angular/core';
import { UsersProvider } from './../../providers/users/users';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the UserEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
})
export class UserEditPage {

  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider ) {

      if (this.navParams.data.user) {
        this.model = this.navParams.data.user;
      } else {
        this.model = new User();
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserEditPage');
  }

  save() {
    this.saveUser()
      .then(() => {
        this.toast.create({ message: 'Enregistrement reussi avec succès.', position: 'botton', duration: 3000 }).present();
        this.navCtrl.pop();
      })
      .catch((error) => {
        this.toast.create({ message: 'Erreur enregistrement. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      })
  }

  private saveUser() {
    if (this.model.id) {
      return this.userProvider.update(this.model);
    } else {
      return this.userProvider.insert(this.model);
    }
  }
}

export class User {
  id: number;
  nomUtilisateur: string;
  prenomUtilisateur: string;
}