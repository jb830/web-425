/*
============================================
; Title:  app.component.ts 
; Author: Professor Krasso
; Date: 29. March, 2024
; Modified by: Joanna Brumfield
; Description: Component
;===========================================
*/
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component'; 
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule, 
    NavComponent, 
    FooterComponent, 
    ComposerListComponent, 
    AboutComponent, 
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'composer-app';
}
