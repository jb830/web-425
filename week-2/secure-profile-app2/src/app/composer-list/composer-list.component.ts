// ============================================
// ; Title:  composer-list.component.ts 
// ; Author: Professor Krasso
// ; Date: 5. April, 2024
// ; Modified by: Joanna Brumfield
// ; Description: Component
// ;===========================================
// 

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {IComposer} from '../composer.interface';
import {Composer} from '../composer.class';


@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {
  composers: Array<IComposer>;
  
  constructor() {
    this.composers = new Composer().getComposers();
  }
}
