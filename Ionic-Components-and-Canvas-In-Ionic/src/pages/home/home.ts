import {Component, ViewChild} from '@angular/core';
import {NavController, ModalController, Modal, ActionSheetController} from 'ionic-angular';
import {CanvasPage} from "../canvas/canvas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  @ViewChild('name') name;

  constructor(private modal: ModalController, private navCtrl: NavController, public actionControl: ActionSheetController) {

  }


  showActionSheet(e) {
    let actionSheet = this.actionControl.create({
      title: 'Actions for Image',
      buttons: [
        {
          text: 'Like'
        },
        {
          text: 'Comment'
        },
        {
          text: 'Follow'
        }
      ]
    });
    actionSheet.present();
  }

  openModal(name) {

    if (name) {
      this.name = 'Hey ' + name + ', welcome to the new page!!';
    }
    else {
      this.name = 'No name entered';
    }

    const myData = {
      name: this.name
    };
    const myModal: Modal = this.modal.create('MyModalPage', {data: myData});

    myModal.present();

    /*myModal.onDidDismiss((data) => {
      console.log(data);
    });*/

  }


  loadCanvas() {
    this.navCtrl.push(CanvasPage);
  }





}
