import { Component } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text: string;

  constructor(public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController) {

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            this.text = 'Destructive clicked';
          }
        },
        {
          text: 'Archive',
          handler: () => {
            this.text = 'Archive clicked';
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.text = 'Cancel clicked';
          }
        }
      ]
    });
 
    actionSheet.present();
  }

}
