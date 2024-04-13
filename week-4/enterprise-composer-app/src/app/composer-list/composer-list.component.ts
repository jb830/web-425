// ============================================
// ; Title:  composer-list.component.ts 
// ; Author: Professor Krasso
// ; Date: 13. April, 2024
// ; Modified by: Joanna Brumfield
// ; Description: Component
// ;===========================================
// 

import {
  Component
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RouterModule
} from '@angular/router';
import {
  FormControl
} from '@angular/forms';
import {
  ReactiveFormsModule
} from '@angular/forms';
import { Observable 
} from 'rxjs';
import {
  IComposer
} from '../composer.interface';
import {
  ComposerService
} from '../composer.service';
import {
  debounceTime
} from 'rxjs/operators';


@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {

  txtSearchControl = new FormControl('');
  composers$: Observable<IComposer[]>;

  constructor(private composerService: ComposerService) {
    this.composers$ = this.composerService.getComposers();

    //If user inputs value, value change event will call filterComposer functions and create an alert 
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val as string));
  }
  filterComposers(name: string) {
    this.composers$ = this.composerService.filterComposers(name);
  }
}
