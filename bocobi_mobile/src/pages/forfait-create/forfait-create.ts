import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForfaitPage } from '../forfait/forfait';
import { ApiServiceProvider } from '../../providers/api-service/api-service';

/**
 * Generated class for the ForfaitCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forfait-create',
  templateUrl: 'forfait-create.html',
})
export class ForfaitCreatePage implements OnInit {
  data: ForfaitPage
  router: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public apiServiceprovider: ApiServiceProvider) {
      this.data = new ForfaitPage(this.navCtrl, this.navParams)
  }
  ngOnInit() { }

  submitForm(){
    this.apiServiceprovider.createForfait(this.data).subscribe(Response=>{
      console.log(Response)
      this.data.name=''
      this.data.prix=''
      this.router.navigate(['Forfait'])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForfaitCreatePage');
  }

}
