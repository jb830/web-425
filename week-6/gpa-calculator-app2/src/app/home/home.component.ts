/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date: 28. April, 2024
; Modified by: Joanna Brumfield
; Description: Home
;===========================================
*/
import {
  Component
} from '@angular/core';
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatCardModule
} from '@angular/material/card';
import {
  RouterOutlet,
  RouterModule
} from '@angular/router';
import {
  GpaComponent
} from '../gpa/gpa.component';
import {
  GradeSummaryComponent
} from '../grade-summary/grade-summary.component';
import {
  ITranscript
} from '../transcript.interface';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatListModule
} from '@angular/material/list';
import {
  FormsModule
} from '@angular/forms';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    RouterOutlet,
    RouterModule,
    GpaComponent,
    GradeSummaryComponent,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  transcriptEntry: ITranscript;
  selectableGrades: Array < string > = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];
  transcriptEntries: Array < ITranscript > = [];
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  calculateResults() {
    let gpa: number = 0;

    switch (this.transcriptEntry.grade) {
      case "A":
        gpa += 4.00;
        break;
      case "A-":
        gpa += 3.70;
        break;
      case "B+":
        gpa += 3.33;
        break;
      case "B":
        gpa += 3.00;
        break;
      case "B-":
        gpa += 2.70;
        break;
      case "C+":
        gpa += 2.30;
        break;
      case "C":
        gpa += 2.00;
        break;
      case "C-":
        gpa += 1.70;
        break;
      case "D+":
        gpa += 1.30;
        break;
      case "D":
        gpa += 1.00;
        break;
      case "D-":
        gpa += 0.70;
        break;
      case "F":
        gpa += 0.00;
        break;
    }
    
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
