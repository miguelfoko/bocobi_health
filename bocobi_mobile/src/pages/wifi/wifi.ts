import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';


/**
 * Generated class for the WifiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wifi',
  templateUrl: 'wifi.html',
})
export class WifiPage {

data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private hotspot: Hotspot) {
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad WifiPage');
    this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {

      this.data=networks;
      console.log(".........hotspot..........",JSON.stringify(networks));
    });
  }

}
