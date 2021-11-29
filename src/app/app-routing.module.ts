import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuRoute } from './menu-login-senha/login-senha-routing.module';
import { TabelasRoutes } from './tabelas/tabelas-routing.module';


const routes: Routes = [

  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  ...MenuRoute,
  ...TabelasRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
