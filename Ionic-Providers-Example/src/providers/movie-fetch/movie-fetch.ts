
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieFetchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieFetchProvider {

  movies: any[];

  constructor() {
    console.log('Hello MovieFetchProvider Provider');
  }




  showMovies() {
    this.movies = [
      {
        title: 'Iron Man',
        year: '2008',
        actors: 'Robert Downey Jr., Gwyneth Paltrow, Terrence Howard',
        director: 'Jon Favreau',
        src: './assets/imgs/IronMan.jpg',
        description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.'
      },

      {
        title: 'The Incredible Hulk',
        year: '2008',
        actors: 'Edward Norton, Liv Tyler, Tim Roth',
        director: 'Louis Leterrier',
        src: './assets/imgs/Hulk.jpg',
        description: 'Bruce Banner, a scientist on the run from the U.S. Government, must find a cure for the monster he turns into, whenever he loses his temper.'
      },

      {
        title: 'Thor',
        year: '2011',
        actors: 'Chris Hemsworth, Anthony Hopkins, Natalie Portmans',
        director: 'Kenneth Branagh',
        src: './assets/imgs/Thor.jpg',
        description: 'The powerful, but arrogant god Thor, is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.'
      },

      {
        title: 'Captain America',
        year: '2011',
        actors: 'Chris Evans, Hugo Weaving, Samuel L. Jackson',
        director: 'Joe Johnston',
        src: './assets/imgs/CaptainAmerica.jpg',
        description: 'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.'
      },


      {
        title: 'Ant-Man',
        year: '2015',
        actors: ' Paul Rudd, Michael Douglas, Corey Stoll',
        director: 'Peyton Reed',
        src: './assets/imgs/AntMan.jpg',
        description: 'Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.'
      },

      {
        title: 'Doctor Strange',
        year: '2016',
        actors: 'Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams',
        director: 'Scott Derrickson',
        src: './assets/imgs/DrStrange.jpg',
        description: 'While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.'
      },

      {
        title: 'Black Panther',
        year: '2018',
        actors: 'Chadwick Boseman, Michael B. Jordan, Lupita Nyong\'o',
        director: 'Ryan Coogler',
        src: './assets/imgs/BlackPanther.jpg',
        description: 'T\'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T\'Challa\'s father\'s mistake.'
      }
    ];
  }

}
