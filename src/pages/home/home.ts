import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemPage } from '../item/item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public text: string;

  constructor(public navCtrl: NavController) {

  }

  gotoItem() {
    this.navCtrl.push(ItemPage, {text: this.text});
  }

}
