import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPhonePage } from '../register_phone/register_phone';

/*
  Generated class for the register_data page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-register_data',
    templateUrl: 'register_data.html'
})
export class RegisterDataPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad register_dataPage');
    }

    saveContinue() {
      this.navCtrl.push(RegisterPhonePage);
    }

}
