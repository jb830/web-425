import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Create a Composer class with two fields:
// fullName
// genre
// In constructor accept two parameters: fullName and genre and map them to the class fields 
// In the component, add a variable called composers and give it a data type of an Array<Composer>
// In the components constructor, create a new Array and initialize it with 5 new Composer objects 
// composer-list-component.html
// Using the *ngFor directive, loop over the array of composers and output the results to a Bootstrap table -->

export default class Composer {
  fullName: string;
  genre: string;

  
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
  toString() {
    console.log(`\n Composer Name: ${this.fullName}\n Genre: ${this.genre}`);
  }
}

@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  composers: Composer[];

  constructor() {
    this.composers = [ 
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Franz Schubert ", "Classical"),
      new Composer("Pyotr Ilyich Tchaikovsky", "Classical"),
    ]
    this.composers.toString();
  }
}
