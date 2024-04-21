import { Component } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { MatTableModule } from '@angular/material/table'; 

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatTableModule
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {

    books: Observable<IBook[]>;
    header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
    book: IBook | undefined;

    constructor(private bookService: BooksService) {
      this.books = this.bookService.getBooks();
    }

    showBookDetails(isbn:string) {
      this.book = this.bookService.getBook(isbn);
        console.log(this.book);
    }
}
