import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  text: string;
  items: any;

  constructor(public viewCtr: ViewController) {
    this.items = [
      { text: 'Some text1' },
      { text: 'Some text2' },
      { text: 'Some text3' },
      { text: 'Some text4' },
      { text: 'Some text5' },
      { text: 'Some text6' },
      { text: 'Some text7' },
      { text: 'Some text8' },
      { text: 'Some text9' }
    ]
  }

  itemClicked(item) {
    this.viewCtr.dismiss(item);
  }
}
