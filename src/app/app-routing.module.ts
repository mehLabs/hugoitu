import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { Page404Component } from './pages/page404/page404.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:PortfolioComponent,pathMatch:'full'},
  {path:'**',pathMatch:'full',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    scrollOffset: [0,60]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
