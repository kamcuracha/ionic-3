import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  public activeTheme: string = 'theme-light';

  constructor(private storage: Storage) {
    storage.get('activeTheme').then((val) => {
      this.activeTheme = val;
    });
  }

  saveSetting() {
    this.storage.set('activeTheme', this.activeTheme);
  }

}
