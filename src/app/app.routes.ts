import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';



 export const routes: Routes = [
    { path: '',  redirectTo: 'Login'  },
    {  path: 'Login',  component: LoginComponent  }
    
 ];
 
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);