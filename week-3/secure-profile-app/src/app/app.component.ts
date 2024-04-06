/*
============================================
; Title:  app.components.ts 
; Author: Professor Krasso
; Date: 23. March, 2024
; Modified by: Joanna Brumfield
; Description: Component
;===========================================
*/
import {
  Component
} from '@angular/core';
import {
  RouterOutlet
} from '@angular/router';
import {
  CommonModule
} from '@angular/common';
import {
  NavComponent
} from './nav/nav.component';
import {
  FooterComponent
} from './footer/footer.component';
import {
  MyImageComponent
} from './my-image/my-image.component';
import {
  MyDetailsComponent
} from './my-details/my-details.component';
import {
  SignInComponent
} from './sign-in/sign-in.component';
import {
  HomeComponent
} from './home/home.component';

declare const FontAwesomeDom: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    NavComponent, 
    FooterComponent, 
    HomeComponent, 
    SignInComponent, 
    MyImageComponent, 
    MyDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
})

export class AppComponent {

}
