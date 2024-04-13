/*
============================================
; Title:  composer-details.component.ts 
; Author: Professor Krasso
; Date: 5. April, 2024
; Modified by: Joanna Brumfield
; Description: Composer Details Component
;===========================================
*/
import { Component } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
// import { ActivatedRoute, Route } from '@angular/router';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './composer-details.component.html',
  styleUrl: './composer-details.component.css'
})
export class ComposerDetailsComponent {
  composerId: number;
  composer: IComposer | undefined;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId') || '0', 10)
  if (this.composerId) {
    this.composer = new Composer().getComposer(this.composerId);
  }
  }

}
