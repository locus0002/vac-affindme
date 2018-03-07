import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/*
  Generated class for the images_gallery page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-images_gallery',
    templateUrl: 'images_gallery.html'
})
export class ImageGalleryModal {

    imageList: Array<string>;
    imageGrid: Array<Array<Object>>;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public alertCtrl: AlertController) {

      this.imageList = navParams.get('images') || [];
      this.prepareteGrid();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad images_galleryPage');
    }

    dismiss() {
      this.viewCtrl.dismiss();
    }

    prepareteGrid() {

      if (this.imageList.length > 0) {

        let numRows = Math.ceil(this.imageList.length / 2),
          numCols = 3,
          indexRow = 0,
          indexImage = 0;

        while (indexRow < numRows) {
          let auxRow: Array<Object> = [];

          for (let i = indexImage; i < numCols && i < this.imageList.length; i++) {
            auxRow.push({ img: this.imageList[i], index: i });
            indexImage++;
          }
          this.imageGrid.push(auxRow);
          numCols += indexImage;
          indexRow++;
        }
      }
    }

    setProfileImage(index) {

      this.alertCtrl.create({
        title: "Profile Picture",
        message: "Do you wish establishing this picture like the profile picture?",
        buttons: [
          {
            text: 'Cancelar',
            handler: () => { console.log("Operation canceled"); }
          },
          {
            text: 'Aceptar',
            handler: () => {
              console.log("Image: " + this.imageList[index]);
              this.viewCtrl.dismiss(this.imageList[index]);
            }
          }]
      }).present();

    }

}
