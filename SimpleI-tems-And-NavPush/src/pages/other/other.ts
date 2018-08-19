import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-other',
  templateUrl: 'other.html',
})
export class OtherPage {

  public name;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.firstParam = navParams.get("firstPassed");
    // this.secondParam = navParams.get("secondPassed");

    this.name = navParams.get("parameter");
  }

  ionViewDidLoad() {
    
  }

  goBack(){
    
    this.navCtrl.pop();
  }

}
