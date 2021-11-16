import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { MesConstantes2Page } from '../mes-constantes2/mes-constantes2';


const THERMOMETER_SERVICE = 'bbb0';
/**
 * Generated class for the MesConstantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mes-constantes',
  templateUrl: 'mes-constantes.html',
})

export class MesConstantesPage {

  // devices: any[] = [{name: "Connect"}, {name: "Second Connect"}];
  // serialData: any[] = [
  //   {data:"BP1:1", out: false},
  //   {data:"ecran:1", out: true},
  // ];

  devices: any[] = [];
  statusMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toastCtrl: ToastController,
    private ble: BLE,
    private ngZone: NgZone) { }
    
  // scan(){
  //   this.devices=[];
  //   this.ble.scan([],15).subscribe(
  //     device => this.onDeviceDiscovered(device)
  //   );
  // }

  // onDeviceDiscovered(device){
  //   console.log('Discovered' + JSON.stringify(device, null,2));
  //   this.ngZone.run(()=>{
  //     this.devices.push(device)
  //     console.log(device)
  //   })
  // }

  // scan() {
  //   this.setStatus('Scanning for Bluetooth LE Devices');
  //   this.devices = [];  // clear list

  //   this.ble.scan([], 5).subscribe(
  //     device => this.onDeviceDiscovered(device), 
  //     error => this.scanError(error)
  //   );

  //   setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  // }

  // Scan(){
  //   this.devices = [];
  //   this.ble.scan([],15).subscribe(
  //     device => this.onDeviceDiscovered(device)
  //   );
  // }
  // onDeviceDiscovered(device){
  //   console.log('Discovered' + JSON.stringify(device,null,2));
  //   this.ngZone.run(()=>{
  //     this.devices.push(device)
  //     console.log(device)
  //   })
  // }

  // onDeviceDiscovered(device) {
  //   console.log('Discovered ' + JSON.stringify(device, null, 2));
  //   this.ngZone.run(() => {
  //     this.devices.push(device);
  //   });
  // }

  // If location permission is denied, you'll end up here
  // scanError(error) {
  //   this.setStatus('Error ' + error);
  //   let toast = this.toastCtrl.create({
  //     message: 'Error scanning for Bluetooth low energy devices',
  //     position: 'middle',
  //     duration: 5000
  //   });
  //   toast.present();
  // }

  // setStatus(message) {
  //   console.log(message);
  //   this.ngZone.run(() => {
  //     this.statusMessage = message;
  //   });
  // }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MesConstantesPage');
  // }
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    this.scan();
  }

  scan() {
    this.setStatus('Scan des appareils bluetooth');
    this.devices = [];  // clear list

    this.ble.scan([THERMOMETER_SERVICE], 5).subscribe(
      device => this.onDeviceDiscovered(device), 
      error => this.scanError(error)
    );

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }

  onDeviceDiscovered(device) {
    console.log('Discovered ' + JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
    });
  }

  // If location permission is denied, you'll end up here
  scanError(error) {
    this.setStatus('Error ' + error);
    let toast = this.toastCtrl.create({
      message: 'Erreur lors du scan Bluetooth niveau energie bas',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }

  deviceSelected(device) {
    console.log(JSON.stringify(device) + ' selected');
    this.navCtrl.push(MesConstantes2Page, {
      device: device
    });
  }
}