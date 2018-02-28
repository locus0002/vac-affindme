import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, Geolocation, GoogleMapsMarker, GoogleMapsMarkerOptions } from 'ionic-native';
import { EventModal } from '../event/event';
import { StateModal } from '../state/state';
declare var google;

/*
  Generated class for the affinmap page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-affinmap',
    templateUrl: 'affinmap.html'
})
export class AffinmapPage {

    goomap: GoogleMap;

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public modalCtrl: ModalController,
      public platform: Platform) {

      platform.ready().then(() =>
      {
        this.loadMap();
      });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad affinmapPage');
    }

    createNewEvent() {
      this.modalCtrl.create(EventModal).present();
    }

    createNewState() {
      this.modalCtrl.create(StateModal).present();
    }

    loadMap() {

      let googleCurrentPosition;

      Geolocation.getCurrentPosition().then((currentPosition) =>
      {
        googleCurrentPosition = new GoogleMapsLatLng(currentPosition.coords.latitude, currentPosition.coords.longitude);
        this.goomap = new GoogleMap('goomap',
          {
            'backgroundColor': 'white',
            'controls': {
              'compass': true,
              'myLocationButton': true,
              'indoorPicker': true,
              'zoom': true
            },
            'gestures': {
              'scroll': true,
              'tilt': true,
              'rotate': true,
              'zoom': true
            },
            'camera': {
              'latLng': googleCurrentPosition,
              'tilt': 30,
              'zoom': 15,
              'bearing':50
            }
          });
        let currentMarker: GoogleMapsMarkerOptions = { position: googleCurrentPosition, title: 'You are here', draggable: true };

        this.goomap.on(GoogleMapsEvent.MAP_READY).subscribe(() =>
        {
          currentMarker.draggable = true;
          this.goomap.addMarker(currentMarker);
          this.goomap.setMyLocationEnabled(true);
          this.goomap.setAllGesturesEnabled(true);
          this.goomap.setCompassEnabled(true);
        });
      });
    }

}
