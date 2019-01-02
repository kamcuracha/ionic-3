import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;
  nightMode: boolean = false;

  constructor(public navCtrl: NavController,
    public app: AppProvider) {
      setTimeout(() => {
        console.log(app.activeTheme);
        this.nightMode = app.activeTheme !== 'theme-light';
      }, 500);
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  changeMode() {
    this.app.activeTheme = this.nightMode ? 'theme-dark' : 'theme-light';
    this.app.saveSetting();
  }

}
