/*
============================================
; Title:  contact.components.ts 
; Author: Professor Krasso
; Date: 19. April, 2024
; Modified by: Joanna Brumfield
; Description: Contact Components
;===========================================
*/
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatCardModule,
    MatIcon,
    MatIconModule,
    FlexLayoutModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
