import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class MarkersProvider {
  constructor(private afs: AngularFirestore) {
    console.log("Hello MarkersProvider Provider");
  }

  saveMarker(coords) {
    this.afs
      .collection("markers")
      .add({
        latitude: coords.latitude,
        longitude: coords.longitude,
        message: "hi buddy"
      })
      .then(() => {
        alert("Added");
      });
  }

  getAllMarkers() {
    return this.afs.collection("markers").valueChanges();
  }
}