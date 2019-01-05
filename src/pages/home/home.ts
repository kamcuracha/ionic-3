import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any = [];

  constructor(public navCtrl: NavController) {
    for (var i = 0; i < 100; i++) {
      this.items.push(i);
    } 
  }

}
