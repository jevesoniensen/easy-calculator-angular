import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-loader',
  templateUrl: './data-loader.component.html',
  styleUrls: ['./data-loader.component.css']
})
export class DataLoaderComponent {

  initDb: String;

  constructor() { }

  doInitDb(): void {
    alert("Test");
  }

}
