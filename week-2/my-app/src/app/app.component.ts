/*
============================================
; Title:  app.component.ts 
; Author: Professor Krasso
; Date: 28. March, 2024
; Modified by: Joanna Brumfield
; Description: Component
;===========================================
*/
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

declare const FontAwesomeDom: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HomeComponent, ContactComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
