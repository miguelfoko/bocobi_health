import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
import { BlogPostInterface } from '../../model/BlogPost';

/**
 * Generated class for the BlocPostDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bloc-post-details',
  templateUrl: 'bloc-post-details.html',
})
export class BlocPostDetailsPage {

  item: BlogPostInterface;
  loading: Loading;
  trustedVideoUrl: SafeResourceUrl;
  title: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private domSanitizer: DomSanitizer,
              private loadingCtrl: LoadingController) {

                if (this.navParams.data != undefined) {
                  this.item = this.navParams.data;
                  this.title = this.item.title.substring(0, 25);
                }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlocPostDetailsPage');
  }

  ionViewWillEnter(): void {
    if (this.item.videoURL) {
      this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.item.videoURL);
      this.loading = this.loadingCtrl.create({
        content: 'Veillez patienter...'
      });
      this.loading.present();
    }

  }

  handleIFrameLoadEvent() {
    this.loading.dismiss();
  }

}
