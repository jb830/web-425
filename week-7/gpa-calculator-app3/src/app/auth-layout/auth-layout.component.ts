/*
============================================
; Title:  auth-layout.component.html 
; Author: Professor Krasso
; Date: 28. April, 2024
; Modified by: Joanna Brumfield
; Description: Auth Layout html
;===========================================
*/
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BaseLayoutComponent } from '../base-layout/base-layout.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    BaseLayoutComponent
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss'
})
export class AuthLayoutComponent {

}
