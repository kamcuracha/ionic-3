import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash: boolean = true;
  inputText: string;
  key: string = 'inputValue';

  constructor(public navCtrl: NavController,
    private storage: Storage) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  saveData(e: any) {
    this.storage.set(this.key, this.inputText);
    alert('Input saved!');
  }

  loadData(e: any) {
    this.storage.get(this.key).then((val) => {
      alert('The input is: ' + val);
    });
  }

}
