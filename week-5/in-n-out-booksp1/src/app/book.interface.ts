/*
============================================
; Title:  book.interface.ts 
; Author: Professor Krasso
; Date: 19. April, 2024
; Modified by: Joanna Brumfield
; Description: Book Interface
;===========================================
*/
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}