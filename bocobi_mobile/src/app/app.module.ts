import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { MyApp } from './app.component';
import { BLE } from '@ionic-native/ble/ngx';

import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { DetailPage } from '../pages/detail/detail';
import { CreercomptePage } from '../pages/creercompte/creercompte';
import { ForgotpassPage } from '../pages/forgotpass/forgotpass';
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
import { UserconnectePage } from '../pages/userconnecte/userconnecte';
import { CarnetelectroniquePage } from '../pages/carnetelectronique/carnetelectronique'
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { MesConstantesPage } from '../pages/mes-constantes/mes-constantes';
import { UsersProvider } from '../providers/users/users';
// import { MConstantesPage } from '../pages/m-constantes/m-constantes';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { ConstPage } from '../pages/const/const';
import { FormatTemperaturePipe } from '../pipes/format-temperature/format-temperature';
import { FormatTemperatureCPipe } from '../pipes/format-temperature-c/format-temperature-c';
import { FormatTemperatureFPipe } from '../pipes/format-temperature-f/format-temperature-f';
import { ListeUserPage } from '../pages/liste-user/liste-user';
import { UserEditPage } from '../pages/user-edit/user-edit';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { ServicesHttpProvider } from '../providers/services-http/services-http';
import { TestgetPage } from '../pages/testget/testget';
import { WifiPage } from '../pages/wifi/wifi';
import { Hotspot } from '@ionic-native/hotspot/ngx';
import { ProfilPage } from '../pages/profil/profil';
import { TextConsultationPage } from '../pages/text-consultation/text-consultation';
import { TextConsultationBookingPage } from '../pages/text-consultation-booking/text-consultation-booking';
import { PatientsDetailsPage } from '../pages/patients-details/patients-details';
import { PageChatPage } from '../pages/page-chat/page-chat';
import { ConstantProvider } from '../providers/constant/constant';
import { MedicamentsPostPage } from '../pages/medicaments-post/medicaments-post';
import { BlocPostDetailsPage } from '../pages/bloc-post-details/bloc-post-details';
import { VideoConsultationResultPage } from '../pages/video-consultation-result/video-consultation-result';
import { VideoConsultationPage } from '../pages/video-consultation/video-consultation';
import { BookAppointmentConfirmationDetailsPage } from '../pages/book-appointment-confirmation-details/book-appointment-confirmation-details';
import { BookAppointmentConfirmationPage } from '../pages/book-appointment-confirmation/book-appointment-confirmation';
import { BookAppointmentPage } from '../pages/book-appointment/book-appointment';
import { BluetoothPage } from '../pages/bluetooth/bluetooth';
import { ApiProvider } from '../providers/api/api';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    DetailPage,
    CreercomptePage,
    ForgotpassPage,
    AbonnementPage,
    AlertPage,
    ComptePage,
    ConseilPage,
    ExamenPage,
    FacturePage,
    ForfaitPage,
    MedicamentsPage,
    RendezVousPage,
    TeleconsultationPage,
    ParametrePage,
    UserconnectePage,
    CarnetelectroniquePage,
    MesConstantesPage,
    ListeUserPage,
    TextConsultationPage, TextConsultationBookingPage, PatientsDetailsPage,PageChatPage,
    ConstPage, FormatTemperaturePipe,
    FormatTemperatureCPipe,
    FormatTemperatureFPipe,
    UserEditPage,
    UserDetailPage,BlocPostDetailsPage,
    TestgetPage,
    WifiPage, ProfilPage, MedicamentsPostPage,
    VideoConsultationResultPage, VideoConsultationPage, BookAppointmentConfirmationDetailsPage,
    BookAppointmentConfirmationPage, BookAppointmentPage, BluetoothPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    DetailPage,
    CreercomptePage,
    ForgotpassPage,
    AbonnementPage, AlertPage,
    ComptePage,
    ConseilPage,
    ExamenPage,BluetoothPage,
    FacturePage,
    ForfaitPage,
    MedicamentsPage,
    RendezVousPage,
    TeleconsultationPage,
    ParametrePage,
    UserconnectePage,
    CarnetelectroniquePage,BlocPostDetailsPage,
    MesConstantesPage,
    // MConstantesPage,
    ConstPage,
    ListeUserPage,
    UserEditPage,MedicamentsPostPage,
    UserDetailPage,PageChatPage,
    TestgetPage,
    WifiPage, ProfilPage,  TextConsultationPage, TextConsultationBookingPage, 
    PatientsDetailsPage,
    VideoConsultationResultPage, VideoConsultationPage, BookAppointmentConfirmationDetailsPage,
    BookAppointmentConfirmationPage, BookAppointmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HTTP,
    HttpClientModule,
    AuthServiceProvider,
    BluetoothSerial,
    BLE,
    ApiServiceProvider,
    UsersProvider,
    ServicesHttpProvider,
    Hotspot,
    ConstantProvider,
    ApiProvider
  ]
})
export class AppModule { }
