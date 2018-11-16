import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RepasPage } from "../repas/repas";
import { AvisPage } from "../avis/avis";
import { ProfilPlusPage } from "../profilPlus/profilPlus"
import { ProfilPage } from "../profil/profil"
import { MessagerPage } from "../messager/messager"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToRepas() {
    this.navCtrl.push(RepasPage)
  }

  onGoToAvis() {
    this.navCtrl.push(AvisPage)
  }

  onGoToProfilPlus() {
    this.navCtrl.push(ProfilPlusPage)
  }

  onGoToProfil() {
    this.navCtrl.push(ProfilPage)
  }

  onGoToMessager() {
    this.navCtrl.push(MessagerPage)
  }
}
