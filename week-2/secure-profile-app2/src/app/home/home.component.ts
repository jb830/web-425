/*
============================================
; Title:  home.component.ts 
; Author: Professor Krasso
; Date: 5. April, 2024
; Modified by: Joanna Brumfield
; Description: Home Component
;===========================================
*/
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  RouterOutlet,
  RouterModule
} from '@angular/router';
import {
  ComposerListComponent
} from '../composer-list/composer-list.component';
import {
  AboutComponent
} from '../about/about.component';
import {
  ContactComponent
} from '../contact/contact.component';
import {
  SignInComponent
} from '../sign-in/sign-in.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    ComposerListComponent,
    AboutComponent,
    ContactComponent,
    SignInComponent,
    HomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoggedIn: boolean = false;
  title = 'Secure Profile App';

  constructor(private route: ActivatedRoute) {

  }
}
