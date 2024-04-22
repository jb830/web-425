 /*
============================================
; Title:  book-details-dialog.component.ts 
; Author: Professor Krasso
; Date: 19. April, 2024
; Modified by: Joanna Brumfield
; Description: book-details-dialog
;===========================================
*/
 import {
   Component
 } from '@angular/core';
 import {
   MAT_DIALOG_DATA,
   MatDialogRef
 } from '@angular/material/dialog';
 import {
   Inject
 } from '@angular/core';
 import {
   IBook
 } from '../book.interface';
 import {
   MatCardModule
 } from '@angular/material/card';
 import {
   FlexLayoutModule
 } from '@angular/flex-layout';
 import {
   MatDialogModule
 } from '@angular/material/dialog';
 import {
   MatButtonModule
 } from '@angular/material/button';
 @Component({
   selector: 'app-book-details-dialog',
   standalone: true,
   imports: [
     MatCardModule,
     FlexLayoutModule,
     MatDialogModule,
     MatButtonModule

   ],
   templateUrl: './book-details-dialog.component.html',
   styleUrl: './book-details-dialog.component.scss'
 })


 export class BookDetailsDialogComponent {

   book: IBook;

   constructor(private dialogRef: MatDialogRef < BookDetailsDialogComponent > , @Inject(MAT_DIALOG_DATA) public data: any) {
     this.book = data.book;
   }
 }
