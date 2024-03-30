/*
============================================
; Title:  app.routes.ts 
; Author: Professor Krasso
; Date: 29. March, 2024
; Modified by: Joanna Brumfield
; Description: Routes
;===========================================
*/

import { Routes } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component'; 
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {path: 'about' , component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'composer-list', component: ComposerListComponent}
];
