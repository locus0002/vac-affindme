import { Component } from '@angular/core';
import { AffinmapPage } from '../affinmap/affinmap';
import { EventModal } from '../event/event';
import { StateModal } from '../state/state';
/*
  Generated class for the tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    templateUrl: 'tabs.html'
})
export class Tabs {

    tabAffmap: any = AffinmapPage;
    tabState: any = StateModal;
    tabEvent: any = EventModal;

    constructor() { }

}
