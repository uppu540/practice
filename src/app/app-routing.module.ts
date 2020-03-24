import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [

  { 
    path: 'dashboard',
    component: DashboardComponent
   },
  { 
    path: 'side-menu',
    component: SideMenuComponent
   },
  { 
    path: 'header',
    component: HeaderComponent
   },

   { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
