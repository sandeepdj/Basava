import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeaderComponent } from './pages/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes : Routes =
  [ {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  {path: 'Login', component: LoginComponent},
  {
      path: '',
      redirectTo: 'Basava',
      pathMatch: 'full'
    },
    {
      path: 'Basava',
      component: LayoutComponent,
      children: [
        { path: '', redirectTo: 'Home', pathMatch: 'full' },
        {path: 'Home', component: HomeComponent},
        {path: 'About', component: HomeComponent},
      ]
    } 
  ];
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


 