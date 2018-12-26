import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: any;

  constructor(public navCtrl: NavController,
    public http: HttpClient) {
      this.getData();
  }

  getData() {
    let data: Observable<any>;
    data = this.http.get("https://jsonplaceholder.typicode.com/photos");
    data.subscribe( res => {
      this.items = res;
    });
  }

}
