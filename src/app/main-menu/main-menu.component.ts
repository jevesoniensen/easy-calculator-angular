import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {NavItem} from './nav-item';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  @Input() items: NavItem[];
  @ViewChild('childMenu') public childMenu;

  constructor() { }

  ngOnInit(): void {
  }

}
