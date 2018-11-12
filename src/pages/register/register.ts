import { Component, NgModule } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';
import { LoginPage } from '../login/login';


@NgModule()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {

  simple_form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public firebaseService: FirebaseService,
    public toastCtrl: ToastController
  ) {

  }

  ionViewWillLoad(){
    this.getData();
  }

  getData(){
    this.simple_form = this.formBuilder.group({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      NbRue: new FormControl('', Validators.required),
      rue: new FormControl('', Validators.required),
      postal: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
    });
  }
  
  
  add(value){
    this.firebaseService.addUser(value)
      .then( res => {
        let toast = this.toastCtrl.create({
          message: 'Votre compte a été créer avec succes',
          duration: 3000
        });
        toast.present();
        this.resetFields();
      }, err => {
        console.log(err)
      })
  }

  resetFields(){
    this.simple_form.reset()
  }

  BackToAccueil(){
    this.navCtrl.push(LoginPage);
  }
}
