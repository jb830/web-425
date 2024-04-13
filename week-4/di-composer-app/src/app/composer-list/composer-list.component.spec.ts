/*
============================================
; Title:  composer-list.component.ts 
; Author: Professor Krasso
; Date: 13. April, 2024
; Modified by: Joanna Brumfield
; Description: Composer List Component
;===========================================
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComposerListComponent } from './composer-list.component';

describe('ComposerListComponent', () => {
  let component: ComposerListComponent;
  let fixture: ComponentFixture<ComposerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComposerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
