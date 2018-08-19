import {Component } from '@angular/core';
import {NavController, ModalController, Modal} from 'ionic-angular';
import {RealDataProvider} from "../../providers/real-data/real-data";
import {FormControl} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})

export class HomePage {
  countries: any;
  searchTerm: string = '';
  searchControl: FormControl;
  searchCountries: any;

  images: ["../../"];

  constructor(public navCtrl: NavController,
              public realDataProvider: RealDataProvider,
              private modal: ModalController) {
    this.searchControl = new FormControl();
  }



  ionViewDidLoad() {

    this.getCountryDataList();

    //this.setFilteredItems();

  }

  getCountryDataList() {
    // kick off a request for data & receive data from internet
    this.realDataProvider.getPortraits().then(data => {
      this.countries = data;

      this.searchCountries = this.countries;
      console.log(this.countries);
    });

    //this.navCtrl.push(HomePage,{},{ animate: true, direction: 'forward'});
  }


  setFilteredItems() {

    this.searchCountries = this.realDataProvider.filterItems(this.searchTerm, this.countries);
    console.log("setFilteredItems: " + this.searchCountries);
  }



  openModal(countryDetails) {

    const myData = countryDetails;
    const myModal: Modal = this.modal.create('MyModalPage', {data: myData});

    myModal.present();
  }


}
