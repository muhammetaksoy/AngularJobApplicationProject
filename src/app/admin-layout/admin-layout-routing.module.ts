import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdsListComponent } from './ads/ads-list/ads-list.component';
import { HeaderComponent } from './header/header.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {path:'',component:AdminLayoutComponent,
    children:[
      {path:'ads',component:AdsListComponent},
      {path:'users',component:UsersListComponent}
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
