import { Component } from '@angular/core';
import { InfiniteScroll, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UsersProvider } from './../../providers/users/users';
import { ViewChild } from '@angular/core';

/**
 * Generated class for the ListeUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-user',
  templateUrl: 'liste-user.html',
})
export class ListeUserPage {

  users: any[];
  page: number;
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private userProvider: UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeUserPage');
  }

  ionViewDidEnter() {
    this.users = [];
    this.page = 1;
    this.infiniteScroll.enable(true);
    this.getAllUsers(this.page);
  }

  getAllUsers(page: number) {
    this.userProvider.getAll(page)
      .then((result: any) => {
        for (var i = 0; i < result.data.length; i++) {
          var user = result.data[i];
          this.users.push(user);
        }

        if (this.infiniteScroll) {
          this.infiniteScroll.complete();
          if (this.users.length == result.total) {
            this.infiniteScroll.enable(false);
          }
        }
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erreur de liste utilisateur. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  getUsers() {
    setTimeout(() => {
      this.page += 1;
      this.getAllUsers(this.page);
    }, 500);
  }

  openUser(id: number) {
    this.userProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('UserDetailPage', { user: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erreur de recupération. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });

  }

  openCreateUser() {
    this.navCtrl.push('UserEditPage');
  }

  openEditUser(id: number) {
    this.userProvider.get(id)
      .then((result: any) => {
        this.navCtrl.push('UserEditPage', { user: result.data });
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erreur de modification. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  deleteUser(user: any) {
    this.userProvider.remove(user.id)
      .then((result: any) => {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);

        this.toast.create({ message: 'Oppération effectué avec succès.', position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erreur de suppression. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}