import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the event page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-event',
    templateUrl: 'event.html'
})
export class EventModal {

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad eventPage');
    }

    dismiss() {
      this.viewCtrl.dismiss();
    }

}
