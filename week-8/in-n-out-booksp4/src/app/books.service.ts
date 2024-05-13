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
import { HttpClientModule, HttpParams, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  isbns: string[] = [
    "0345339681", "0261103571", "9780593099322",
    "9780261102361", "9780261102378", "9780590302715",
    "9780316769532", "9780743273565", "9780590405959"
  ];

  constructor(private http: HttpClient) { 

  }
  getBooks(): Observable<IBook[]> {
    let params = new HttpParams();

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    return this.http.get<IBook[]>('https://openlibrary.org/api/books', { params: params });
  }
}
