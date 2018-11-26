import { Component, NgModule } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/auth.service';
import { SigninPage } from '../signin/signin';
import { AngularFirestore } from 'angularfire2/firestore';
import {
  NativeGeocoder,
  NativeGeocoderForwardResult
} from "@ionic-native/native-geocoder";
 
import { MarkersProvider } from "../../providers/markers/markers";
@NgModule()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  simple_form: FormGroup;
  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public firebaseService: FirebaseService,
    public toastCtrl: ToastController,
    private auth: AuthService,
    public fb: FormBuilder,
    public afs: AngularFirestore,
    private nativeGeocoder: NativeGeocoder,
    public markersProvier: MarkersProvider,
  ) {
  }

  ionViewWillLoad() {
    this.getData();
  }

  getData() {
    this.simple_form = this.formBuilder.group({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      NbRue: new FormControl('', Validators.required),
      rue: new FormControl('', Validators.required),
      postal: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
  }

  add(value) {
    this.firebaseService.addUser(value)
      .then(res => {
        let toast = this.toastCtrl.create({
          message: 'Votre compte a été créer avec succes',
          duration: 3000
        });
        toast.present();
      })

    let data = this.simple_form.value;
    let credentials = {
      email: data.email,
      password: data.password,
    };

    this.auth.signUp(credentials).then(
      () => this.navCtrl.setRoot(SigninPage),
    );

    this.afs.collection('/markers').add({
      NbRue: value.NbRue,
      rue: value.rue,
      postal: value.postal,
      city: value.city,
    })
    this.afs.collection('/users').add({
      nom: value.nom,
      prenom: value.prenom
    })


    let address = value[0].NbRue + '' + value[0].rue + '' + value[0].postal + '' + value[0].city;

      this.nativeGeocoder
        .forwardGeocode(address)
        .then((coordinates: NativeGeocoderForwardResult) => {
          this.markersProvier.saveMarker(coordinates[0]);
          console.log(coordinates);
        })
        .catch((error: any) => console.log(error));
  }
  BackToAccueil() {
    this.navCtrl.push(LoginPage);
  }
}

