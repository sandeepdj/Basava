import { NgModule,ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule,ExtraOptions } from '@angular/router';

 
import { HeaderComponent } from './pages/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { AuthGuard } from './_guards/index';
const ROUTES : Routes =
  [ {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  { path: 'Login', component: LoginComponent},
  {
      path: '',
      redirectTo: 'Basava',
      pathMatch: 'full'
    },
    {
      path: 'Basava',
      component: LayoutComponent,
      canActivate: [AuthGuard], 
      children: [
        { path: '', redirectTo: 'Reports', pathMatch: 'full' },
        {path: 'Home', component: HomeComponent, canActivate: [AuthGuard] },
        {path: 'Reports', component: ReportsComponent, canActivate: [AuthGuard] },
        {path: 'Profile', component: ProfileComponent, canActivate: [AuthGuard]},
      ]
    },
    { path: '**', redirectTo: '' }
  ];
  const config: ExtraOptions = {
    useHash: true,
};

  @NgModule({
    imports: [RouterModule.forRoot(ROUTES, config)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }  


 

 