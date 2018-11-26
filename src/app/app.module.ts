import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from "../pages/register/register";
import { LoginPage } from '../pages/login/login'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { FirebaseService } from '../services/firebase.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environment/environment';
import { EntrancePage } from '../pages/entrance/entrance';
import { SigninPage } from '../pages/signin/signin';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Facebook } from '@ionic-native/facebook';
import { MarkersProvider } from '../providers/markers/markers';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { AvisPage } from '../pages/avis/avis';
import { MessagerPage } from '../pages/messenger/messager';
import { ProfilPage } from '../pages/profil/profil';
import { ProfilPlusPage } from '../pages/profilPlus/profilPlus';
import { RepasPage } from '../pages/repas/repas';
import { ChatProvider } from '../providers/chat/chat';
import { RequestsProvider } from '../providers/request/request';
import { UserProvider } from '../providers/user/user';
import { MessageriPage } from '../pages/messageri/messageri';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    EntrancePage,
    SigninPage,
    AvisPage,
    MessagerPage,
    ProfilPage,
    ProfilPlusPage,
    RepasPage,
    MessageriPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(MyApp),
    AngularFirestoreModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    EntrancePage,
    SigninPage,
    AvisPage,
    MessagerPage,
    ProfilPage,
    ProfilPlusPage,
    RepasPage,
    MessageriPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    AngularFireAuth,
    Facebook,
    MarkersProvider,
    NativeGeocoder,
    ChatProvider,
    RequestsProvider,
    UserProvider,
  ]
})
export class AppModule {}
