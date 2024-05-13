/*
============================================
; Title:  book-list.components.ts 
; Author: Professor Krasso
; Date: 19. April, 2024
; Modified by: Joanna Brumfield
; Description: Book List Component
;===========================================
*/
import { Component } from '@angular/core';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule,  } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatList,
    MatListItem,
    MatDialogModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

  books: Array<IBook> = [];
  header: Array < string > = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook | undefined;

  constructor(private bookService: BooksService, public dialog: MatDialog) {
    
  this.bookService.getBooks().subscribe((res: any) => {
    console.log(res);

    for (let key in res) {
      if (res.hasOwnProperty(key) && res[key].details) { 
        const details = res[key].details;

        let authors = [];
        if (res[key].details.authors) {
          authors = res[key].details.authors.map(function(author: { name: string }) {
            return author.name;
          });
        }
  
        this.books.push({
          isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
          title: res[key].details.title,
          description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
          numOfPages: res[key].details.number_of_pages,
          authors: authors
        });
      }
    }
  });
}
  showBookDetails(isbn: string) {
    this.book = this.books.find(book => book.isbn === isbn);
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    })

    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = undefined;
      }
    });
  }
}