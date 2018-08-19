import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the AlbumDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-album-details',
  templateUrl: 'album-details.html',
})
export class AlbumDetailsPage {
  albumDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.albumDetails = this.navParams.get("Albums");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlbumDetailsPage');
  }

}
