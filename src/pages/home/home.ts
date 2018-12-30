import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;
  data: string;

  constructor(public navCtrl: NavController,
    private geolocation: Geolocation) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.data = 'Lat: ' + resp.coords.latitude + ', Lng: ' + resp.coords.longitude;
     }).catch((error) => {
      this.data = 'Error getting location: ' + error.message;
     });
  }

}
