import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the RealDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RealDataProvider {

  //dataUrl = "http://countryapi.gear.host/v1/Country/getCountries";
  dataUrl = "https://restcountries.eu/rest/v2/all";
  constructor(public http: HttpClient) {
  }

  filterItems(searchTerm, items){

    console.log("Searched In Provider: "+searchTerm);

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });

  }

  getPortraits() {
    return new Promise(resolve => {
      this.http.get(this.dataUrl).subscribe(data => {
        resolve(data);
      }, error => {
        console.log("ERROR", error);
      });
    });
  }

}
