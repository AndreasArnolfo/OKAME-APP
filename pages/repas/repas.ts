import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {AvisPage} from "../avis/avis";

@Component({
  selector: 'page-repas',
  templateUrl: 'repas.html'
})
export class RepasPage {
  constructor(public navCtrl: NavController){

  }

  onGoToAvis() {
    this.navCtrl.push(AvisPage)
  }
}
