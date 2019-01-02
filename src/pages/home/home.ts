import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;
  user: any = {};

  constructor(public navCtrl: NavController,
    private googlePlus: GooglePlus,
    private http: HttpClient) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  loginGoogle() {
    this.googlePlus.login({})
      .then(res => {
        this.user = res;
        this.getData();
        console.log(res);
      })
      .catch(err => console.error(err));
  }

  getData() {
    this.http
      .get('https://www.googleapis.com/plus/v1/people/me?access_token=' + this.user.accessToken)
      .subscribe((res:any) => {
        this.user.name = res.displayName;
        this.user.image = res.image.url;
      });
  }

}
