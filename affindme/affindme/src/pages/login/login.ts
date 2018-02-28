import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterDataPage } from '../register_data/register_data';

/*
  Generated class for the login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad loginPage');
    }

    createAccount() {
      this.navCtrl.push(RegisterDataPage);
    }

    logIn() {
      console.log('ionViewDidLoad loginPage');
    }

    getFbAccount() {
      console.log('ionViewDidLoad loginPage');
    }

}
