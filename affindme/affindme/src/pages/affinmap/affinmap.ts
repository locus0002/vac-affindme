import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { EventModal } from '../event/event';
import { StateModal } from '../state/state';

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

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public modalCtrl: ModalController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad affinmapPage');
    }

    createNewEvent() {
      this.modalCtrl.create(EventModal).present();
    }

    createNewState() {
      this.modalCtrl.create(StateModal).present();
    }

}
