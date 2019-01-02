import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Badge } from '@ionic-native/badge';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;

  constructor(public navCtrl: NavController,
    private badge: Badge) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
