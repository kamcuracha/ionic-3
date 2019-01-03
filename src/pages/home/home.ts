import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,
    private alertCtrl: AlertController) {
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

  editItem(key) {
    let alert = this.alertCtrl.create({
      title: 'Edit name',
      inputs: [
        {
          name: 'name',
          placeholder: 'Input name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Edit',
          handler: data => {
            if(data !== undefined && data !== null && data.name) {
              firebase.database().ref('items/' + key).update({name: data.name});
            }
          }
        }
      ]
    });
    alert.present();
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
