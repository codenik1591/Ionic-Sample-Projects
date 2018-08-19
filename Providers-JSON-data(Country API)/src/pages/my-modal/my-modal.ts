import {Component} from '@angular/core';
import {IonicPage, ViewController, NavParams} from 'ionic-angular';

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

  ionViewWillLoad() {
    this.data = this.navParams.get('data');

    /*for (let i=0; i<this.data.languages.length;i++){
      console.log(this.data.languages[i].name);
    }*/
  }

  closeModal() {
    this.view.dismiss();
  }

}
