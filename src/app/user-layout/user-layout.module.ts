import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { UserLayoutComponent } from './user-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule
  ],
})
export class UserLayoutModule { }
