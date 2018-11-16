import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import leaflet from 'leaflet';
import { AngularFirestore } from 'angularfire2/firestore';
import { NativeGeocoder, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { MarkersProvider } from '../../providers/markers/markers';
import { ModalController } from 'ionic-angular';
import { firestore } from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})

export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  items;
  // read collection
  constructor(
    public navCtrl: NavController,
    public afs: AngularFirestore, 
    public alertCtrl: AlertController,
    private nativeGeocoder: NativeGeocoder,
    public markersProvier: MarkersProvider,
    public modalCtrl: ModalController,
  ) {
  }


  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      minZoom: 3,
      maxZoom: 18,

    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 16,
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
    }).on('locationerror', (err) => {
      alert(err.message);
    })


    let initialMarkers = []; 

    this.afs.collection('markers').ref.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        initialMarkers.push(doc.data());
      });
    });

    initialMarkers.map(el => {
      el
    })

    let address = initialMarkers[0].NbRue + ' ' + initialMarkers[0].rue  + ' ' + initialMarkers[0].postal + ' ' + initialMarkers[0].city;
    
    this.map.on('geosearch_showlocation', function (adress) {
      leaflet.marker([adress.x, adress.y]).addTo(this.map)
    })   
  }



    addMarker(adress) {  
      let prompt = this.alertCtrl.create({
        title: 'Add Marker',
        message: "Enter location",
        inputs: [
          {
            name: 'city',
            placeholder: 'City'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: data => {
              
              this.geoCodeandAdd(adress);
            }
          }
        ]
      });
      prompt.present();
    }

    geoCodeandAdd(adress) {
      this.nativeGeocoder.forwardGeocode(adress)
      .then((coordinates: NativeGeocoderForwardResult[]) => {
        let markerGroup = leaflet.featureGroup();
        let marker: any = leaflet.marker([coordinates[0].latitude, coordinates[0].longitude]).on('click', () => {
        alert('Marker clicked');
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);

      })
      .catch((error: any) => console.log(error));
    }

    loadMarkers() {
      this.markersProvier.getAllMarkers().subscribe((markers: any) => {
        markers.forEach(singlemarker => {
          let markerGroup = leaflet.featureGroup();
   
          let marker: any = leaflet
            .marker([singlemarker.latitude, singlemarker.longitude])
            .on("click", () => {
              alert(singlemarker.message);
            });
          markerGroup.addLayer(marker);
          this.map.addLayer(markerGroup);
        });
      });
    }
  
  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}
