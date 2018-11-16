import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register'
import { SigninPage } from '../signin/signin';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  RegisterPage: RegisterPage;

  constructor(public navCtrl: NavController,private auth: AuthService, public navParams: NavParams, public loadingCtrl: LoadingController,public alertCtrl: AlertController ) {
  }

 loginViaFacebook() {
    this.auth.signInWithFacebook()
      .then(authData => {
        console.log(authData);
        this.loading.dismiss().then(() => {
          this.navCtrl.setRoot(HomePage);
        });
      }, error => {
        this.loading.dismiss().then(() => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });

    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  goToSignup(): void {
    this.navCtrl.push(RegisterPage);
  }
  openSignin(): void{
    this.navCtrl.push(SigninPage)
  }
}
