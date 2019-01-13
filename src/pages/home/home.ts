import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;
  user: any = {};

  constructor(public navCtrl: NavController,
    private fb: Facebook) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  loginFacebook() {
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        if(res.status === 'connected') {
          this.user.img = 'http://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square';
          console.log('Logged into Facebook!', res);
        } else {
          alert('Login failed!');
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

}
