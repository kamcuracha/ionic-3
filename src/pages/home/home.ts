import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController) {

  }

  presentPopover(e: any) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: e
    });

    popover.onDidDismiss( res => {
      console.log(res);
    });
  }

}
