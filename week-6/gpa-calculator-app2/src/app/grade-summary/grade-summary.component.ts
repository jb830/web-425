/*
============================================
; Title:  grade-summary.component.ts
; Author: Professor Krasso
; Date: 28. April, 2024
; Modified by: Joanna Brumfield
; Description: Grade Summary
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

import { MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-grade-summary',
  standalone: true,
  imports: [
    MatListItem      
  ],
  templateUrl: './grade-summary.component.html',
  styleUrl: './grade-summary.component.scss'
})
export class GradeSummaryComponent {
  @Input() grade: string = "";
  @Input() course: string = "";
}
