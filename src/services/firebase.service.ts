import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class FirebaseService {

  constructor(
    public afs: AngularFirestore,
  ){

  }

  addUser(value){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/users').add({
        nom: value.nom,
        prenom: value.prenom,
        mail: value.mail,
        password: value.password,
        NbRue: value.NbRue,
        rue: value.rue,
        postal: value.postal,
        city: value.city,
      })
        .then(
          (res) => {
            resolve(res)
          },
          err => reject(err)
        )
    })
  }
}
