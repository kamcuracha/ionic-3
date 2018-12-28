import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;
  message: string;
  subject: string;
  file: string;
  link: string;

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  socialShare() {
    this.socialSharing.share(this.message, this.subject, this.file, this.link)
      .then( () => {})
      .catch( () => {});
  }

}
