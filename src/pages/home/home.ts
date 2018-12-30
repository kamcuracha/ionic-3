import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;

  constructor(public navCtrl: NavController,
    private admobFree: AdMobFree) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  showAds() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-2243443675586732/4217528567', // test id: ca-app-pub-3940256099942544/6300978111
      autoShow: true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
       })
       .catch(e => console.log(e));
  }

}
