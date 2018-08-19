import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {

  constructor() {
    console.log('DataProvider');
  }

  getAlbumData(){
    let albumList = [
      {
        image:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/the-beatles-abbey-road-paul-meijering.jpg",
        title:"Abbey Road",
        year_released:"1969"
      },
      {
        image:"https://img.cdandlp.com/2015/01/imgL/117340441.jpg",
        title:"Let it be",
        year_released:"1970"
      },
      {
        image:"http://s.newsweek.com/sites/www.newsweek.com/files/styles/lg/public/2017/05/25/beatles.png",
        title:"Sgt. Pepper's Lonely Hearts Club Band",
        year_released:"1967"
      },
      {
        image:"https://img.discogs.com/1KKjKXEgBkSFH5KsrcvoLoKkei0=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2091637-1267894244.jpeg.jpg",
        title:"Yellow Submarine",
        year_released:"1969"
      },
      {
        image:"https://i.pinimg.com/originals/65/f5/e8/65f5e8202f01004e333dcd136c393959.jpg",
        title:"A Hard Day's Night",
        year_released:"1964"
      },
      {
        image:"https://orig00.deviantart.net/e614/f/2015/104/7/5/0011___the_beatles___rubber_soul_by_sunsetcolors-d8prb6w.jpg",
        title:"Rubber Soul",
        year_released:"1965"
      }
    ];
    return albumList;
  }
}

