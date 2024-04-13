/*
============================================
; Title:  composer.service.ts 
; Author: Professor Krasso
; Date: 13. April, 2024
; Modified by: Joanna Brumfield
; Description: Composer Service
;===========================================
*/
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
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

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number) {
    for(let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return undefined;
  }

  
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
