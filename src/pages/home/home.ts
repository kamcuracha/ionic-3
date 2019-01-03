import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any = [];
  ref: any = firebase.database().ref('items/');
  inputText: string;

  splash: boolean = true;

  constructor(public navCtrl: NavController) {
    this.ref.on('value', res => {
      this.items = this.snapshotToArray(res);
    });
  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  addItem(item) {
    if(item !== undefined && item !== null && item.name) {
      let newItem = this.ref.push();
      newItem.set(item);
      this.inputText = '';
    }
  }

  deleteItem(key) {
    firebase.database().ref('items/'+key).remove();
  }

  snapshotToArray = snapshot => {
    let returnArray = [];
    snapshot.forEach( el => {
      let item = el.val();
      item.key = el.key;
      returnArray.push(item);
    });
  
    return returnArray;
  };

}
