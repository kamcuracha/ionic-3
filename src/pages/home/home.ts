import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: Observable<any>;
  items: any;
  url: string = "https://jsonplaceholder.typicode.com/posts/";
  public contentLength: number = 180;

  constructor(public navCtrl: NavController,
    public http: HttpClient) {
      this.getData();
  }

  getData() {
    this.data = this.http.get(this.url);
    this.data.subscribe( res => {
      this.items = res;
    });
  }

  doRefresh(e: any) {
    console.log('Begin async refresh operation', e);

    this.data.subscribe( res => {
      this.items = res;
      e.complete();
    });
  }

  doInfinite(e: any) {
    console.log('Begin async infinite-scroll operation');

    this.data = this.http.get(this.url);
    this.data.subscribe( res => {
      this.items = this.items.concat(res);
      e.complete();
    });
  }

}
