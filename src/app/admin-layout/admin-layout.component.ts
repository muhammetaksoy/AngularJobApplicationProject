import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent{
  constructor(private translate: TranslateService) {
    this.setDefaultLanguage();
  }
  setDefaultLanguage():void{
    this.translate.setDefaultLang('tr');
    this.translate.use('tr');
    localStorage.setItem("language","tr");
  }
}
