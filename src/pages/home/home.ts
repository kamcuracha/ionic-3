import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;
  user: any = {};

  constructor(public navCtrl: NavController,
    private googlePlus: GooglePlus) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  loginGoogle() {
    this.googlePlus.login({})
      .then(res => {
        this.user = res;
        console.log(res);
      })
      .catch(err => console.error(err));
  }

}
