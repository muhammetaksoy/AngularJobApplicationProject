import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { AngularmaterialModule } from '../shared/module/angularmaterial/angularmaterial.module';
import { AdsListComponent } from './ads/ads-list/ads-list.component';

import { UsersListComponent } from './users/users-list/users-list.component';
import { CreateUserFormComponent } from './users/create-user-form/create-user-form.component';
import { RemoveconfirmdialogComponent } from './ads/remove-confirm-dialog/removeconfirmdialog.component';
import { CreateAddFormComponent } from './ads/create-ads-form/create-ads-form.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    AdsListComponent,
    CreateAddFormComponent,
    UsersListComponent,
    CreateUserFormComponent,
    RemoveconfirmdialogComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    AngularmaterialModule
  ],
})
export class AdminLayoutModule { }
