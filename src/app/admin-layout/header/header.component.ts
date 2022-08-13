import { Component, OnInit } from '@angular/core';
import { Header } from './models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:string="Angular Job Application Project Admin";
  constructor() { 

  }

  ngOnInit(): void {
  }

}
