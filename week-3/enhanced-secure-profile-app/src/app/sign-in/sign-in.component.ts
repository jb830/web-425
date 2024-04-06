/*
============================================
; Title:  sign-in.components.ts 
; Author: Professor Krasso
; Date: 6. April, 2024
; Modified by: Joanna Brumfield
; Description: Sign-in Component
;===========================================
*/
import {
  Component
} from '@angular/core';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  isLoggedIn: Boolean = false;

  constructor(private router: Router) {
  }

  signin() {
    this.isLoggedIn = true;
    alert('User signed in')
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }
}
