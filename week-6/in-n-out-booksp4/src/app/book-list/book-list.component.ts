/*
============================================
; Title:  book-list.components.ts 
; Author: Professor Krasso
; Date: 19. April, 2024
; Modified by: Joanna Brumfield
; Description: Book List Component
;===========================================
*/
import {
  Component
} from '@angular/core';
import {
  IBook
} from '../book.interface';
import {
  Observable
} from 'rxjs';
import {
  BooksService
} from '../books.service';
import {
  MatTableModule
} from '@angular/material/table';
import {
  MatDialog
} from '@angular/material/dialog';
import {
  MatDialogModule
} from '@angular/material/dialog';
import {
  BookDetailsDialogComponent
} from '../book-details-dialog/book-details-dialog.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatDialogModule
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  books: Observable < IBook[] > ;
  header: Array < string > = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook | undefined;

  constructor(private bookService: BooksService, private dialog: MatDialog) {
    this.books = this.bookService.getBooks();
  }

  showBookDetails(isbn: string) {
    //Underneath the book object assignment (booksService.getBook(isbn), create a dialogRef object and assign it to the dialog.open() function 
    this.book = this.bookService.getBook(isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      //In the body of the open() function create a new object literal called data and a nested object literal called book and assign it the book variable 
      //Set the disableClose to true
      //Set the width to 800px
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })
    //Call the afterClosed() function and set the book variable to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = undefined;
      }
    });
  }
}
