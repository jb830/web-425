/*
============================================
; Title:  base-layout.component.ts
; Author: Professor Krasso
; Date: 28. April, 2024
; Modified by: Joanna Brumfield
; Description: base Layout
;===========================================
*/
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
// import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
// import { FormBuilder, FormGroup } from ‘@angular/forms’;

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    FlexLayoutServerModule,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss'
})
export class BaseLayoutComponent {
  assignment: string;

  constructor(private cookieService: CookieService, private router:Router){
    this.assignment = 'Assignment 7.2 - Reactive Forms'
  }
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
