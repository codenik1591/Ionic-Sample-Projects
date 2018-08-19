import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GradientsDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GradientsDataProvider {
  dataUrl = "http://uigradients.com/gradients.json";
  constructor(public http: HttpClient) {
    console.log('Hello GradientsDataProvider Provider');
  }

  getGradients(){
    return new Promise(resolve => {
      this.http.get(this.dataUrl).subscribe(data =>{
        resolve(data);
      }, error=>{
        console.log("ERROR",error);
      });
    });
  }



}
