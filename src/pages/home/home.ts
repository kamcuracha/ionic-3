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

  constructor(public navCtrl: NavController,
    public http: HttpClient) {
      this.getData();
  }

  getData() {
    this.data = this.http.get("https://jsonplaceholder.typicode.com/posts/");
    this.data.subscribe( res => {
      this.items = res;
    });
  }

}
