/*
============================================
; Title:  composer.class.ts 
; Author: Professor Krasso
; Date: 5. April, 2024
; Modified by: Joanna Brumfield
; Description: Composer Class
;===========================================
*/
import { IComposer } from "./composer.interface";
export class Composer {
  composers: Array<IComposer>;

  constructor() { 
    this.composers = [
    {composerId: 1001, fullName: "Johann Sebastian Bach", genre: "Classical"},
    {composerId: 1002, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"},
    {composerId: 1003, fullName: "Ludwig van Beethoven", genre: "Classical"},
    {composerId: 1004, fullName: "Franz Schubert", genre: "Classical"},
    {composerId: 1005, fullName: "Pyotr Ilyich Tchaikovsky", genre: "Classical"},
    {composerId: 1005, fullName: "Test", genre: "Classical"}
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for(let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return undefined;
  }
}