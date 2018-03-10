import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterDataPage } from '../pages/register_data/register_data';
import { RegisterPhonePage } from '../pages/register_phone/register_phone';
import { RegisterStatusPage } from '../pages/register_status/register_status';
import { AffinmapPage } from '../pages/affinmap/affinmap';
import { StateModal } from '../pages/state/state';
import { EventModal } from '../pages/event/event';
import { Tabs } from '../pages/tabs/tabs';
import { ImageGalleryModal } from '../pages/images_gallery/images_gallery';
import { CameraPreviewPage } from '../pages/camera_preview/camera_preview';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterDataPage,
    RegisterPhonePage,
    RegisterStatusPage,
    AffinmapPage,
    EventModal,
    StateModal,
    Tabs,
    ImageGalleryModal,
    CameraPreviewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterDataPage,
    RegisterPhonePage,
    RegisterStatusPage,
    AffinmapPage,
    EventModal,
    StateModal,
    Tabs,
    ImageGalleryModal,
    CameraPreviewPage
  ],
  providers: [
    {
      provide: ErrorHandler, useClass: IonicErrorHandler
    },
    Geolocation,
    Storage]
})
export class AppModule {}
