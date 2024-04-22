/*
============================================
; Title:  about.components.ts 
; Author: Professor Krasso
; Date: 19. April, 2024
; Modified by: Joanna Brumfield
; Description: About Components
;===========================================
*/
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FlexLayoutModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',

})
export class AboutComponent {

}
