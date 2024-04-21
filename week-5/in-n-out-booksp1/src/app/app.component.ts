/*
============================================
; Title:  app.components.ts 
; Author: Professor Krasso
; Date: 19. April, 2024
; Modified by: Joanna Brumfield
; Description: Components
;===========================================
*/
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
// import { routes } from 'app.router';
// Add import statements for MatToolbarModule, MatCardModule, MatButtonModule, MatListModule, FlexLayoutModule, 
// MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIcon } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookListComponent } from './book-list/book-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FlexLayoutModule,
    MatIcon,
    AboutComponent,
    BookListComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Exercise 5.2 - Navigation and Layout"
  };
  
}
