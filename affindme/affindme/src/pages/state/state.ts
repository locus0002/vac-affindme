import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the state page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-state',
    templateUrl: 'state.html'
})
export class StateModal {

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad statePage');
    }

    dismiss() {
      this.viewCtrl.dismiss();
    }

}
