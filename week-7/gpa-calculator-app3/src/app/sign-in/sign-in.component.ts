/*
============================================
; Title:  sign-in.component.ts
; Author: Professor Krasso
; Date: 3. May, 2024
; Modified by: Joanna Brumfield
; Description: sign in component 
;===========================================
*/
import {
  Component
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  SignInService
} from '../sign-in.service';

import {
  CookieService
} from 'ngx-cookie-service';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardTitle,
  MatCardSubtitle
} from '@angular/material/card';
import {
  MatLabel
} from '@angular/material/form-field';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import {
  CommonModule
} from '@angular/common';
import {
  MatButton
} from '@angular/material/button';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatLabel,
    MatCardSubtitle,
    FlexLayoutModule,
    CommonModule,
    MatButton,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  signinForm: FormGroup;
  errorMessage: string = "";

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {
    this.signinForm = this.fb.group({
      studentId: ''
    });
  }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ''
    });
  }

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'The student ID you entered is invalid, please try again.';
    }
  }
}
