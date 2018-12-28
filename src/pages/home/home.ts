import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;
  key: string = 'items';
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  items: any = [];

  constructor(public navCtrl: NavController,
    private storage: Storage,
    public http: HttpClient) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  getPosts() {
    let data: Observable<any>;
    data = this.http.get(this.url);
    data.subscribe( res => {
      this.items = res;
    });
  }

  saveData() {
    this.storage.set(this.key, JSON.stringify(this.items));
    alert('Items saved!');
  }

  loadData() {
    this.storage.get(this.key).then((val) => {
      if(val != null && val != undefined) {
        this.items = JSON.parse(val);
        alert('The items are: ' + val);
      }
    });
  }

}
