/*
============================================
; Title:  person.class.ts 
; Author: Professor Krasso
; Date: 23. March, 2024
; Modified by: Joanna Brumfield
; Description: class
;===========================================
*/

import {Iperson} from "./person.interface";

class Person implements Iperson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myName = new Person("Joanna", "Brumfield");

console.log(`My name is ${myName.firstName} ${myName.lastName}`);