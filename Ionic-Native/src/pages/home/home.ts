import {Component} from '@angular/core';
import {ToastController, Platform} from 'ionic-angular';
import {
  SpeechRecognition,
  SpeechRecognitionListeningOptionsAndroid,
  SpeechRecognitionListeningOptionsIOS
} from "@ionic-native/speech-recognition";

import {SMS} from "@ionic-native/sms";

/*
import {Shake} from "@ionic-native/shake";*/

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  listenList: Array<String> = [];
  androidOptions: SpeechRecognitionListeningOptionsAndroid;
  iosOptions: SpeechRecognitionListeningOptionsIOS;
  msg: string;
  phoneNum: any;

  constructor(private toast: ToastController, private sms: SMS, private platform: Platform, private speech: SpeechRecognition) {

  }

  listenToSpeech(): void {
    this.androidOptions = {
      prompt: 'Speak into your phone!',
      language: 'en-US'
    }

    this.iosOptions = {
      language: 'en-US'
    }

    if (this.platform.is('android')) {
      this.speech.startListening(this.androidOptions).subscribe(data => this.listenList = data, error => alert("Error: " + error));
    } else if (this.platform.is('ios')) {
      this.speech.startListening(this.iosOptions).subscribe(data => this.listenList = data, error => alert("Error: " + error));
    }
  }


  async sendSMS() {

    try {

      if ((!this.msg) || (!this.phoneNum)) {
        alert("Phone-Number or Message feild cannt be empty");
      }
      else if (this.msg && this.phoneNum) {

        await this.sms.send(String(this.phoneNum), this.msg);
        const toast = this.toast.create({
          message: 'Message Sent Successfully!',
          duration: 3000
        });

        toast.present();
        //alert("Message: "+this.msg+" Number: "+this.phoneNum);
      }
    } catch (e) {
      const toast = this.toast.create({
        message: 'Message Sent Failed!',
        duration: 3000
      });
      toast.present();

    }

    this.listenList = null;
  }

  setMessage(speechMsg) {
    this.msg = speechMsg;
  }


}
