import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterStatusPage } from '../register_status/register_status';

/*
  Generated class for the register_phone page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-register_phone',
    templateUrl: 'register_phone.html'
})
export class RegisterPhonePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad register_phonePage');
    }

    sendCode() {
      console.log('ionViewDidLoad register_phonePage');
    }

    saveContinue() {
      console.log('ionViewDidLoad register_phonePage');
      this.navCtrl.push(RegisterStatusPage);
    }

}
