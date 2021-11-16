import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController, ToastController } from 'ionic-angular';
import { TestgetPage } from '../testget/testget';
// import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { UsersProvider } from './../../providers/users/users';

/**
 * Generated class for the CreercomptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creercompte',
  templateUrl: 'creercompte.html',
})
export class CreercomptePage {
  model: User;

  @Input()
  compte: any[];
  comptSub;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userProvider: UsersProvider,
    // public authServiceProvider: AuthServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {

    this.model = new User();
    this.model.adresseMailUtilisateur = '';
    this.model.password = '';
    this.model.nomUtilisateur = '';
    this.model.nomUtilisateur = '';
    this.model.dateNaissance = '';
    this.model.lieuNaissance = '';
    this.model.lieuResidence = '';
    this.model.sexUtilisateur = '';
    this.model.numeroTelephoneUtilisateur = '';
    this.model.password = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreercomptePage');
  }

  createAccount() {
    this.userProvider.createAccount(this.model.nomUtilisateur, this.model.prenomUtilisateur, this.model.dateNaissance, 
     this.model.lieuNaissance, this.model.lieuResidence, this.model.sexUtilisateur, this.model.adresseMailUtilisateur,
      this.model.numeroTelephoneUtilisateur, this.model.password)
      .then((result: any) => {
        this.toastCtrl.create({
          message: 'Usuário criado com sucesso. Token: ' + result.token,
          position: 'botton', duration: 3000
        }).present();

        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        this.toastCtrl.create({
          message: 'Erro ao criar o usuário. Erro: ' + error.error,
          position: 'botton', duration: 3000
        }).present();
      });
  }

  // doSignup() {
  //   this.showLoader();
  //   this.authServiceProvider.register(this.regData).then((result) => {
  //     this.loading.dismiss();
  //     this.navCtrl.pop();
  //   }, (err) => {
  //     this.loading.dismiss();
  //     this.presentToast(err);
  //   });
  // }

  // showLoader(){
  //   this.loading = this.loadingCtrl.create({
  //       content: 'Authentication...'
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
  push(){
    this.navCtrl.push(TestgetPage)
  }


}
export class User {
  nomUtilisateur: string;
  prenomUtilisateur: string;
  dateNaissance: any;
  lieuNaissance: string;
  lieuResidence: string;
  sexUtilisateur: string;
  adresseMailUtilisateur: string;
  numeroTelephoneUtilisateur: any;
  password: string;
}