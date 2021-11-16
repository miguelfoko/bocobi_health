import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CreercomptePage } from '../creercompte/creercompte';
import { DetailsPage } from '../details/details'
import { ForgotpassPage } from '../forgotpass/forgotpass';
import { UsersProvider } from '../../providers/users/users';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  loading: any;
  loginData = { username:'', password:'',  };
  data: any;
  isLoggedIn: boolean = false;
  app: any;
  model: User;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private userProvider: UsersProvider,
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController) {

      this.model = new User();
      this.model.email = '';
      this.model.password = '';

      if(localStorage.getItem("token")) {
        this.isLoggedIn = true;
      }
    console.log("git fly");
  }
  alertAction(): void {
    let alert = this.alertCtrl.create({
      title: 'Attention !',
      subTitle: 'Desolé vous ne pouvez pas encore y avoir accès, bien vouloir vous loger',
      buttons: ['ok'],
    }); console.log("bio");
    alert.present();
  }
  // showDetails() {
  //   this.navCtrl.push(DetailsPage);
  // }
  skip() {
    this.navCtrl.push(DetailsPage)
  }
  creercompte() {
    this.navCtrl.push(CreercomptePage)
  }

  travers(){
    this.navCtrl.push(DetailsPage)
  }
  alerpass() {
    this.navCtrl.push(ForgotpassPage)
  }



  // doLogin() {
  //   this.showLoader();
  //   this.authServiceProvider.login(this.loginData).then((result) => {
  //     this.loading.dismiss();
  //     this.data = result;
  //     localStorage.setItem('token', this.data.access_token);
  //     this.navCtrl.setRoot(DetailsPage);
  //   }, (err) => {
  //     this.loading.dismiss();
  //     this.presentToast(err);
  //   });
  // }

  register() {
    this.navCtrl.push(CreercomptePage);
  }

  // showLoader(){
  //   this.loading = this.loadingCtrl.create({
  //       content: 'Authenticating...'
  //   });

  //   this.loading.present();
  // }

  // presentToast(msg) {
  //   let toast = this.toastCtrl.create({
  //     message: msg,
  //     duration: 3000,
  //     position: 'bottom',
  //     dismissOnPageChange: true
  //   });

  //   toast.onDidDismiss(() => {
  //     console.log('Dismissed toast');
  //   });

  //   toast.present();
  // }
  // logout() {
  //   this.authServiceProvider.logout().then((result) => {
  //     this.loading.dismiss();
  //     let nav = this.app.getRootNav();
  //     nav.setRoot(DetailPage);
  //   }, (err) => {
  //     this.loading.dismiss();
  //     this.presentToast(err);
  //   });
  // }
  
  login() {
    this.userProvider.login(this.model.email, this.model.password)
      .then((result: any) => {
        this.toastCtrl.create({ message: 'Usuário logado com sucesso. Token: ' + result.token,
         position: 'botton', duration: 3000 }).present();

      })
      .catch((error: any) => {
        this.toastCtrl.create({ message: 'Erro ao efetuar login. Erro: ' + error.error,
         position: 'botton', duration: 3000 }).present();
      });
  }
}

export class User {
  email: string;
  password: string;
}