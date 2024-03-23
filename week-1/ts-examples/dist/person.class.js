"use strict";
/*
============================================
; Title:  person.class.ts
; Author: Professor Krasso
; Date: 23. March, 2024
; Modified by: Joanna Brumfield
; Description: class
;===========================================
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let myName = new Person("Joanna", "Brumfield");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
