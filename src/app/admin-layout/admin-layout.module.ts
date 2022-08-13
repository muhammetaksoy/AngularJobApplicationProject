import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { AngularmaterialModule } from '../shared/module/angularmaterial/angularmaterial.module';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    AngularmaterialModule
  ]
})
export class AdminLayoutModule { }
