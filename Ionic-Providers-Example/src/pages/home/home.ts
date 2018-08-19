import { Component } from '@angular/core';
import { Modal, ModalController } from 'ionic-angular';
/*
import {MyModalPage} from "../my-modal/my-modal";
*/

import { MovieFetchProvider } from '../../providers/movie-fetch/movie-fetch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

/*  movies: any[];*/

  constructor(private modal: ModalController, public movieService: MovieFetchProvider) {

  }

  ionViewDidLoad() {
    /*this.showlist();*/
    this.movieService.showMovies();
    /*console.log("Loaded");*/
  }


  openModal(movieData){
      console.log(movieData);

      const myModal: Modal = this.modal.create('MyModalPage', {data : movieData});
      myModal.present();
  }
}
