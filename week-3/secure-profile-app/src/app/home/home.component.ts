/*
============================================
; Title:  home.components.ts 
; Author: Professor Krasso
; Date: 6. April, 2024
; Modified by: Joanna Brumfield
; Description: Home Component
;===========================================
*/
import {
  Component
} from '@angular/core';
import {
  RouterOutlet
} from '@angular/router';
import {
  ActivatedRoute
} from '@angular/router'
import {
  CommonModule
} from '@angular/common';
import {
  NavComponent
} from '../nav/nav.component';
import {
  FooterComponent
} from '../footer/footer.component';
import {
  MyImageComponent
} from '../my-image/my-image.component';
import {
  MyDetailsComponent
} from '../my-details/my-details.component';
import {
  SignInComponent
} from '../sign-in/sign-in.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    NavComponent, 
    FooterComponent, 
    SignInComponent, 
    MyImageComponent, 
    MyDetailsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = "Exercise 3.2 - Passing Data to Routes Part 2";
  isLoggedIn: Boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'));
  }
}
