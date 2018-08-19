import {Component} from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the MyModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-modal',
  templateUrl: 'my-modal.html',
})
export class MyModalPage {

  data: any;

  constructor(private navParams: NavParams, private view: ViewController) {
  }


  /*ionViewDidLoad() {
    console.log('ionViewDidLoad MyModalPage');
  }*/

  ionViewWillLoad() {
    this.data = this.navParams.get('data');

    console.log(this.data);
  }

  closeModal() {
    /*const data = {
      name: 'Akshay',
      occupation : 'Milk Man'
    };*/

    this.view.dismiss();

    //this.view.dismiss(data);
  }

}
