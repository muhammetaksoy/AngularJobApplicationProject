import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Header } from './models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  selectedLanguage:any;
  constructor(private translateService:TranslateService) { 

  }

  ngOnInit(): void {

  }

  onChangeLanguage(event:any){
    this.translateService.use(event.target.value);
    localStorage.setItem("language",event.target.value);
  }
}
