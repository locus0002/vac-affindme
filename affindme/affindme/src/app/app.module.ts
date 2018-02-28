import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterDataPage } from '../pages/register_data/register_data';
import { RegisterPhonePage } from '../pages/register_phone/register_phone';
import { RegisterStatusPage } from '../pages/register_status/register_status';
import { AffinmapPage } from '../pages/affinmap/affinmap';
import { StateModal } from '../pages/state/state';
import { EventModal } from '../pages/event/event';

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
    StateModal
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
    StateModal
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
