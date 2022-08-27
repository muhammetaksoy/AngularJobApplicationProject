import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { AngularmaterialModule } from '../shared/module/angularmaterial/angularmaterial.module';
import { AdsListComponent } from './ads/ads-list/ads-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { CreateUserFormComponent } from './users/create-user-form/create-user-form.component';
import { RemoveconfirmdialogComponent } from './ads/remove-confirm-dialog/removeconfirmdialog.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { AlertService } from '../shared/services/alert.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateOrUpdateFormComponent } from './ads/create-update-ads-form/create-update-ads-form.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    HeaderComponent,
    AdsListComponent,
    CreateOrUpdateFormComponent,
    UsersListComponent,
    CreateUserFormComponent,
    RemoveconfirmdialogComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    AngularmaterialModule,
    ReactiveFormsModule 
  ],
  providers: [AlertService,DatePipe]
})
export class AdminLayoutModule { }
