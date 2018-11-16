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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    LoginPage,
    EntrancePage,
    SigninPage
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
    SigninPage
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
    NativeGeocoder
    
  ]
})
export class AppModule {}
