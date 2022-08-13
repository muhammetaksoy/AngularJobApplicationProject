import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',loadChildren:()=>import('./admin-layout/admin-layout.module').then(m=>m.AdminLayoutModule)},
  {path:'user',loadChildren:()=>import('./user-layout/user-layout.module').then(m=>m.UserLayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
