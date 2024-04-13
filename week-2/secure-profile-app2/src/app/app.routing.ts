/*
============================================
; Title:  app.routing.ts 
; Author: Professor Krasso
; Date: 5. April, 2024
; Modified by: Joanna Brumfield
; Description: App Router
;===========================================
*/
import {
  Route
} from '@angular/router';
import {
  HomeComponent
} from './home/home.component';
import {
  SignInComponent
} from './sign-in/sign-in.component';

export const AppRoutes: Route[] = [{
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
