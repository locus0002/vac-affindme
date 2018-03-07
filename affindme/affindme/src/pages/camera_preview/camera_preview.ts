import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewRect  } from 'ionic-native';

/*
  Generated class for the camera_preview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-camera_preview',
    templateUrl: 'camera_preview.html'
})
export class CameraPreviewPage {

    effectIndex: number = 0;
    currentImage: any;

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform) {

      platform.ready().then(
        () => {
          this.initializePreview();
        }
      );
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad camera_previewPage');
    }

    changeEffect() {

      let effects = ['aqua', 'blackboard', 'mono', 'negative', 'none', 'posterize', 'sepia', 'solarize', 'whiteboard'];
      this.effectIndex++;

      if (this.effectIndex == (effects.length - 1)) { this.effectIndex = 0; }
      CameraPreview.setColorEffect(effects[this.effectIndex]);

    }

    initializePreview() {

      let previewRect: CameraPreviewRect = {
        x: 0,
        y: 0,
        height: window.innerHeight,
        width: window.innerWidth
      };

      CameraPreview.startCamera(
        previewRect,
        'front',
        false,
        true,
        false,
        1
      );

      CameraPreview.setOnPictureTakenHandler().subscribe(
        (result) => {

          console.log("Image: " + result);
          this.currentImage = result;
        },
        (error) => {
          console.log("Error al tomar la foto: " + error);
        }
      );
    }

    takePicture() {

      CameraPreview.takePicture({ maxWidth: 500, maxHeight:500 });
    }
}
