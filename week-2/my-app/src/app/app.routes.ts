/*
============================================
; Title:  app.routes.ts 
; Author: Professor Krasso
; Date: 28. March, 2024
; Modified by: Joanna Brumfield
; Description: Routes
;===========================================
*/

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'about', component: AboutComponent }
];
