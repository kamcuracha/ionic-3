import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  postsObsrv: Observable<any>;
  postDataLoad: any;
  postDataReturn: any;

  constructor(public navCtrl: NavController,
    public http: HttpClient) {

  }

  postData() {
    let url = "https://reqres.in/api/users";
    this.postDataLoad = {
      "name": "Customer004",
      "email": "customer004@email.com",
    }
    this.postsObsrv = this.http.post(url, this.postDataLoad);
    this.postsObsrv.subscribe( res => {
      this.postDataReturn = res;
    });
  }

}
