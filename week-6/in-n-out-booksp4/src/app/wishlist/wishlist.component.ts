/*
============================================
; Title:  wishlist.component 
; Author: Professor Krasso
; Date: 27. April, 2024
; Modified by: Joanna Brumfield
; Description: Wishlist Component
;===========================================
*/
import {
  Component
} from '@angular/core';
import {
  FormsModule
} from '@angular/forms';

import {
  MatInputModule
} from '@angular/material/input';
import {
  FlexLayoutModule
} from '@angular/flex-layout';
import {
  WishlistCreateComponent
} from '../wishlist-create/wishlist-create.component';
import {
  IWishlistItem
} from '../wishlist-item.interface';
import {
  MatListItem
} from '@angular/material/list';
import {
  MatList
} from '@angular/material/list';
import {
  CommonModule
} from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatListItem,
    MatList,
    CommonModule,
    WishlistCreateComponent,
    FlexLayoutModule,
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  items: Array < IWishlistItem > = [];

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  };
}
