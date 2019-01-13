import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;
  user: any = {};
  objectKeys = Object.keys;

  constructor(public navCtrl: NavController,
    private fb: Facebook,
    private http: HttpClient) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  loginFacebook() {
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) => {
        if(res.status === 'connected') {
          this.user.img = 'http://graph.facebook.com/' + res.authResponse.userID + '/picture?type=square';
          this.getData(res.authResponse.accessToken);
        } else {
          alert('Login failed!');
        }

        
        console.log('Logged into Facebook!', res);
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  getData(token: string) {
    let url = 'https://graph.facebook.com/me?fields=id,name,first_name,last_name,email&access_token=' + token;

    this.http
      .get(url)
      .subscribe((res:any) => {
        this.user.fname = res.first_name;
        this.user.lname = res.last_name;
        this.user.email = res.email;
      });
  }

}
