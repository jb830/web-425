/*
============================================
; Title:  sign-in.guard.ts
; Author: Professor Krasso
; Date: 3. May, 2024
; Modified by: Joanna Brumfield
; Description: sign in guard
;===========================================
*/
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate(): boolean {
    const sessionUser = this.cookieService.get('session_user');
    if (sessionUser) {
      return true;
    } else {
      this.router.navigate(['session/sign-in']);
      return false;
    }
  }
}
