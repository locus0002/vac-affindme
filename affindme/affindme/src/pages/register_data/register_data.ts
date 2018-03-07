import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ActionSheetController, Platform } from 'ionic-angular';
import { ImagePicker, Camera, CameraOptions, PhotoViewer, Crop, File } from 'ionic-native';
import { RegisterPhonePage } from '../register_phone/register_phone';
import { ImageGalleryModal } from '../images_gallery/images_gallery';
import { CameraPreviewPage } from '../camera_preview/camera_preview';


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

    currentImageURL: string = 'assets/image/profile.jpg';

    constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public actionSheetCtrl: ActionSheetController,
                public platform: Platform) { }

    ionViewDidLoad() {
        console.log('ionViewDidLoad register_dataPage');
    }

    chooseOption() {
      this.actionSheetCtrl.create(
        {
          title: 'Profile Picture',
          buttons: [
            {
              text: 'Gallery',
              icon: !this.platform.is('ios') ? 'image' : null,
              handler: () => {
                this.openGallery();
              }
            },
            {
              text: 'Camera',
              icon: !this.platform.is('ios') ? 'camera' : null,
              handler: () => {
                this.startCamera()
              }
            },
            {
              text: 'Cancel',
              icon: !this.platform.is('ios') ? 'close' : null,
              role: 'cancel'
            }
          ]
        }).present();
    }

    openGallery() {
      let optionsImgPicker = {
            maximumImagesCount: 1,
            width: 700,
            height: 700,
            quality: 100,
            outputType: 0
          };

      ImagePicker.getPictures(optionsImgPicker).then(
        (results) => {

          if ((results || []).length > 0) {
            Crop.crop(results[0], { quality: 100 }).then(
              (newImage) => {
                this.currentImageURL = newImage;
              },
              (error) => {
                console.log("Error when we try to crop the image " + JSON.stringify(error));
              }
            );
          }
        },
        (error) => {
          console.log("Error when we try to get the pictures: " + error);
        }
      );
    }

    saveContinue() {
      this.navCtrl.push(RegisterPhonePage);
    }

    startCamera() {

      const CAMERAOPTIONS = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        targetWidth: 700,
        targetHeight: 700,
        saveToPhotoAlbum: false,
        allowEdit: true
      }

      Camera.getPicture(CAMERAOPTIONS).then(
        (imageData) => {
          this.currentImageURL = "data:image/jpg;base64," + imageData;
        },
        (error) => {
          console.log("Error when we try to take a picture using the camera: " + error);
        }
      );
    }

    viewCurrentImage() {
      PhotoViewer.show(this.currentImageURL, 'Profile Picture', { share: true });
    }
}
