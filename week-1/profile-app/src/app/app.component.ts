import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

declare const FontAwesomeDom: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, MyImageComponent, MyDetailsComponent],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
})

export class AppComponent {
  assignment = "Assignment 1.5 - Components"
}
