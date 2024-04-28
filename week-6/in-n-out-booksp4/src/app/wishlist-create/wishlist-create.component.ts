/*
============================================
; Title:  wishlist-create.component 
; Author: Professor Krasso
; Date: 27. April, 2024
; Modified by: Joanna Brumfield
; Description: Wishlist Create Component
;===========================================
*/
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { IWishlistItem } from '../wishlist-item.interface';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-wishlist-create',
  standalone: true,
  imports: [
    CommonModule,
    MatFormField,
    MatLabel,
    FormsModule,
    MatButton,
    FlexLayoutModule,
    MatInputModule
  ],
  templateUrl: './wishlist-create.component.html',
  styleUrl: './wishlist-create.component.scss'
})
export class WishlistCreateComponent {
  item: IWishlistItem;
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  constructor() {
    this.item = {} as IWishlistItem;
  }
  addItem() {
    this.addItemEmitter.emit({ title: this.item.title, authors: this.item.authors });
    this.item = {} as IWishlistItem;
  }
}
