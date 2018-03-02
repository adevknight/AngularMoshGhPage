import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  navbarBgColor = environment.navbarBgColor;

  constructor() { }

  ngOnInit() {
  }

}
