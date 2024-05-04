/*
============================================
; Title:  not-found.component.ts
; Author: Professor Krasso
; Date: 28. April, 2024
; Modified by: Joanna Brumfield
; Description: Not Found Layout
;===========================================
*/
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from '../home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    HomeComponent,
    RouterModule,
    RouterOutlet,

  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

}
