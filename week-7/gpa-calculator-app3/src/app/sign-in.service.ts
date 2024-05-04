/*
============================================
; Title:  sign-in.service.ts
; Author: Professor Krasso
; Date: 3. May, 2024
; Modified by: Joanna Brumfield
; Description: sign in service
;===========================================
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  studentIds: Array<number> = [1007, 1008, 1009, 1010, 1011, 1012];

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }  

  validate(studentId: number){
    return this.studentIds.some(id => id === studentId);
  }

}
