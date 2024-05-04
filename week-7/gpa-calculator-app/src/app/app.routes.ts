/*
============================================
; Title:  app.routes.ts
; Author: Professor Krasso
; Date: 28. April, 2024
; Modified by: Joanna Brumfield
; Description: App Routes
;===========================================
*/
import {
  Routes,
} from '@angular/router';
import {
  BaseLayoutComponent
} from './base-layout/base-layout.component';
import {
  HomeComponent
} from './home/home.component';
import {
  AuthLayoutComponent
} from './auth-layout/auth-layout.component';
import {
  NotFoundComponent
} from './not-found/not-found.component';
import {
  SignInComponent
} from './sign-in/sign-in.component';
import {
  SignInGuard
} from './sign-in.guard';


export const routes: Routes = [{
    path: '',
    component: BaseLayoutComponent,
    children: [{
      path: '',
      component: HomeComponent
    }, ],
    canActivate: [SignInGuard]
  },

  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [{
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'sign-in',
        component: SignInComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];
