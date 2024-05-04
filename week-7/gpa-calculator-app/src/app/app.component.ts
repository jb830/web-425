
/*
============================================
; Title:  not-found.component.ts
; Author: Professor Krasso
; Date: 28. April, 2024
; Modified by: Joanna Brumfield
; Description: Not Found Layout
;===========================================
*/
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BaseLayoutComponent,
    HomeComponent,
    AuthLayoutComponent,
    NotFoundComponent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    RouterOutlet,
    RouterModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
