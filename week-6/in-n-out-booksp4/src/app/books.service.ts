/*
============================================
; Title:  book.service.ts 
; Author: Professor Krasso
; Date: 21. April, 2024
; Modified by: Joanna Brumfield
; Description: Book Service
;===========================================
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>

  constructor() { 
    this.books = [
        {
            "isbn": "9780062671189",
            "title": "The Night Watchman",
            "description": "Set in 1953, this powerful novel tells the story of Thomas Wazhashk, a night watchman at a jewel bearing plant, who fights against a new Congressional bill threatening the rights of Native American tribes in North Dakota. Inspired by the life of the author's grandfather.",
            "numOfPages": 464,
            "authors": ["Louise Erdrich"]
        },
        {
            "isbn": "9780593490143",
            "title": "The Cloisters",
            "description": "In this intriguing novel, a graduate student finds herself caught in a web of intrigue, power, and mysticism while working with historic tarot cards at a museum known as The Cloisters.",
            "numOfPages": 320,
            "authors": ["Katy Hays"]
        },
        {
            "isbn": "9780385547345",
            "title": "Lessons in Chemistry",
            "description": "Set in the 1960s, this inspiring story follows Elizabeth Zott, a female chemist whose unconventional views and approaches to life and science challenge the norms of her time.",
            "numOfPages": 400,
            "authors": ["Bonnie Garmus"]
        },
        {
            "isbn": "9780486419237",
            "title": "The Jungle",
            "description": "A groundbreaking novel that exposed the harsh conditions and exploited lives of immigrants in the United States’ meatpacking industry, leading to significant changes in food safety standards.",
            "numOfPages": 330,
            "authors": ["Upton Sinclair"]
        },
        {
            "isbn": "9780735219106",
            "title": "Where the Crawdads Sing",
            "description": "A touching story of Kya Clark, the 'Marsh Girl' of Barkley Cove, who grows up isolated in the North Carolina marshes and becomes a suspect in the murder case of a man she was once involved with.",
            "numOfPages": 368,
            "authors": ["Delia Owens"]
        }
    ];
  }
  getBooks(): Observable<IBook[]> {
    return of(this.books);
    console.log(this.books);
  };

  getBook(isbn: string): IBook | undefined {
    for (let book of this.books) {
        if (book.isbn === isbn) {
            return book;
        }
    }
    console.log('Book not found');
    return undefined; 
  };
}
