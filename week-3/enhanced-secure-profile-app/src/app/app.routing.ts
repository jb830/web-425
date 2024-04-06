/*
============================================
; Title:  app.routing.ts 
; Author: Professor Krasso
; Date: 6. April, 2024
; Modified by: Joanna Brumfield
; Description: App Routing
;===========================================
*/
import {
  Routes
} from '@angular/router';
import {
  SignInComponent
} from './sign-in/sign-in.component';
import {
  HomeComponent
} from './home/home.component';
import {
  signInGuard
} from './sign-in.guard';

export const AppRoutes: Routes = [{
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [signInGuard]
  }
];
