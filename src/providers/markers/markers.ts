import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class MarkersProvider {
  constructor(private afs: AngularFirestore) {
    console.log("Hello MarkersProvider Provider");
  }

  saveMarker(coords) {
    console.log('cest good')
    this.afs.collection("/markers")
      .add({
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
  }

  getAllMarkers() {
    return this.afs.collection("markers").valueChanges();
  }
}