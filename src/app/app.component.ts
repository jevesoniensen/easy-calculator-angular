import {Component, ViewEncapsulation} from '@angular/core';
import {VERSION} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'easy-calculator-angular'; 
}
