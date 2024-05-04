/*
============================================
; Title:  gpa.component.ts
; Author: Professor Krasso
; Date: 28. April, 2024
; Modified by: Joanna Brumfield
; Description: GPA
;===========================================
*/
import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gpa',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './gpa.component.html',
  styleUrl: './gpa.component.scss'
})
export class GpaComponent {
  @Input() gpaTotal: number=0;
}
