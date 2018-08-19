import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from '../other/other';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  otherPage = OtherPage;
  constructor(public navCtrl: NavController) {

  }



  goTo(name) {

    
    name = name || 'No Name Entered';

    this.navCtrl.push(OtherPage, {parameter: name});
  }
}
