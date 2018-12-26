import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  public text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = this.navParams.get('text');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

}
