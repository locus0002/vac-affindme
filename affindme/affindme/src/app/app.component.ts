import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar, Splashscreen, Facebook } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { AffinmapPage } from '../pages/affinmap/affinmap';
import { Tabs } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //@ViewChild(Nav) nav: Nav;
  nav: Nav;
  rootPage = LoginPage;

  constructor(public platform: Platform, public nativeStorage: Storage) {
    this.initializeApp();
  }

  initializeApp() {

    console.log("Checking wether the platform is ready");
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log("First step");
      this.nativeStorage.get('userAFM').
        then(
        (data) => {
          console.log("******INFORMATION******");
          console.log("Data user: " + JSON.stringify(data));
          console.log(data);
          this.nav.setRoot(Tabs);
          StatusBar.styleDefault();
          Splashscreen.hide();
        },
        (error) => {
          this.nav.setRoot(LoginPage);
          StatusBar.styleDefault();
          Splashscreen.hide();
        }
        );
    });
  }

  logOut() {
    Facebook.logout()
      .then((response) => {
        this.nativeStorage.remove('userAFM');
        this.nav.setRoot(LoginPage);
      },
      (error) => {
        console.log("Error when we close facebook's Session");
      });
  }
}
