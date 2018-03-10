import { Component } from '@angular/core';
import { Facebook } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterDataPage } from '../register_data/register_data';
import { Tabs } from '../tabs/tabs';
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

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public storage: Storage) {

      Facebook.browserInit(2054514391462646, "v2.8");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad loginPage');
    }

    createAccount() {
      this.navCtrl.push(RegisterDataPage);
    }

    loginFacebook() {

      let permission = new Array<string>(),
          nav = this.navCtrl,
          that = this;

      permission = ["public_profile"];
      Facebook.login(permission)
        .then((responseFB) => {

          let userId = responseFB.authResponse.userID,
              params = new Array<string>();

          Facebook.api("/me?fields=name,gender", params)
            .then((userFB) => {
              userFB.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
              this.storage.set('userAFM',
                {
                  name: userFB.name,
                  gender: userFB.gender,
                  picture: userFB.picture
                }).then(() => {
                  this.navCtrl.setRoot(Tabs);
                }, (error) => {
                  console.log("Error in login Facebook: " + error);
                });
            });
        }, (error) => {
          console.log("Error in login permission: " + error);
        });
    }

    logIn() {
      this.navCtrl.setRoot(Tabs);
    }

}
