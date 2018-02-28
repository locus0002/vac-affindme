import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';

/*
  Generated class for the register_status page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-register_status',
    templateUrl: 'register_status.html'
})
export class RegisterStatusPage {

    txtStatus: string;
    txtIam: string;
    txtLookingfor: string;
    urlCurrentImage: string = 'assets/image/trafficlight.jpg';

    constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public actionSheetCtrl: ActionSheetController,
      public platform: Platform) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad register_statusPage');
    }

    showStatus() {
      let currentActionSheet = this.actionSheetCtrl.create(
        {
          cssClass: 'action-sheet-status',
          title: 'Status',
          buttons: [
            {
              text: 'Taken',
              icon: !this.platform.is('ios') ? 'close-circle' : null,
              handler: () => {
                this.urlCurrentImage = 'assets/image/trafficlightTaken.jpg';
                this.txtStatus = 'Taken';
              }
            },
            {
              text: 'Complicated',
              icon: !this.platform.is('ios') ? 'alert' : null,
              handler: () => {
                this.urlCurrentImage = 'assets/image/trafficlightComplicated.jpg';
                this.txtStatus = 'Taken';
              }
            },
            {
              text: 'Avaible',
              icon: !this.platform.is('ios') ? 'bonfire' : null,
              handler: () => {
                this.urlCurrentImage = 'assets/image/trafficlightAvailable.jpg';
                this.txtStatus = 'Taken';
              }
            }
          ]
        });
      currentActionSheet.present();
    }

    showGenre(title) {
      let type = title == 'I am ...' ? 'g' : 'l',
        currentActionSheet = this.actionSheetCtrl.create(
        {
          cssClass: 'action-sheet-status',
          title: title,
          buttons: [
            {
              text: 'Man',
              icon: !this.platform.is('ios') ? 'male' : null,
              handler: () => {
                if (type == 'g') { this.txtIam = 'Man'; } else { this.txtLookingfor = 'Man'; }
              }
            },
            {
              text: 'Woman',
              icon: !this.platform.is('ios') ? 'female' : null,
              handler: () => {
                if (type == 'g') { this.txtIam = 'Woman'; } else { this.txtLookingfor = 'Woman'; }
              }
            },
            {
              text: type =='g' ? 'Open mind' : 'Anyone',
              icon: !this.platform.is('ios') ? 'link' : null,
              handler: () => {
                if (type == 'g') { this.txtIam = 'Open mind'; } else { this.txtLookingfor = 'Anyone'; }
              }
            }
          ]
        });
      currentActionSheet.present();
    }

}
