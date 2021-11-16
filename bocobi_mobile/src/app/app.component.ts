import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AbonnementPage } from '../pages/abonnement/abonnement';
import { AlertPage } from '../pages/alert/alert';
import { ComptePage } from '../pages/compte/compte';
import { ConseilPage } from '../pages/conseil/conseil';
import { ExamenPage } from '../pages/examen/examen';
import { FacturePage } from '../pages/facture/facture';
import { ForfaitPage } from '../pages/forfait/forfait';
import { MedicamentsPage } from '../pages/medicaments/medicaments';
import { RendezVousPage } from '../pages/rendez-vous/rendez-vous';
import { TeleconsultationPage } from '../pages/teleconsultation/teleconsultation';
import { ParametrePage } from '../pages/parametre/parametre';
import { CarnetelectroniquePage } from '../pages/carnetelectronique/carnetelectronique'
import { MesConstantesPage } from '../pages/mes-constantes/mes-constantes';
import { ConstPage } from '../pages/const/const';
import { WifiPage } from '../pages/wifi/wifi';
import { BluetoothPage } from '../pages/bluetooth/bluetooth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  menus=[
    {title:'Acceuil', Component: HomePage},
    {title:'Abonnement', Component: AbonnementPage},
    {title:'bluetooth', Component: BluetoothPage},
    {title:'Alert', Component: AlertPage},
    {title:'Carnet électronique', Component: CarnetelectroniquePage},
    {title:'Compte', Component: ComptePage},
    {title:'Conseil', Component: ConseilPage},
    {title:'Examen', Component: ExamenPage},
    {title:'Facture', Component: FacturePage},
    {title:'Forfait', Component: ForfaitPage},
    {title:'Médicament', Component: MedicamentsPage},
    {title:'Mes constantes', Component:MesConstantesPage},
    {title:'Const', Component:ConstPage},
    {title:'Rendez-vous', Component: RendezVousPage},
    {title:'Téléconsultation', Component: TeleconsultationPage},
    {title:'Parametre', Component: ParametrePage},
    {title:'wifi', Component: WifiPage},
    {title:'Aide', Component: HomePage},
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  onPage(m){
    this.rootPage=m.Component;
  }
}

