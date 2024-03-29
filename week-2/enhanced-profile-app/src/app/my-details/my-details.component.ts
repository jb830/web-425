import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string; 
  keyWords = ["#Typescript", "#2024", "#ngl"];
  
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }
  toString() {
    console.log(`\n Full Name: ${this.fullName}\n Favorite Food: ${this.favoriteFood}\n Favorite Color: ${this.favoriteColor}`);
  }
}


@Component({
  selector: 'app-my-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-details.component.html',
  styleUrl: './my-details.component.css'
})
export class MyDetailsComponent {
  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Joanna Brumfield", "Rasberries", "Peach");
    this.myProfile.toString();
  }
}
