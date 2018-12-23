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
  posts: Post[] = [];

  constructor(public navCtrl: NavController,
    public http: HttpClient) {

  }

  getPosts() {
    let url = "https://jsonplaceholder.typicode.com/posts/";
    this.postsObsrv = this.http.get<Post>(url);
    this.postsObsrv.subscribe( res => {
      res.forEach( resItem => {
        this.posts.push(resItem);
      });
    });
  }

}

export class Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
