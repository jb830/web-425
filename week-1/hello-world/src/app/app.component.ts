/*
============================================
; Title:  app.components.ts 
; Author: Professor Krasso
; Date: 23. March, 2024
; Modified by: Joanna Brumfield
; Description: Component
;===========================================
*/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myWorld = "You are now in Jo's world!!";
}
