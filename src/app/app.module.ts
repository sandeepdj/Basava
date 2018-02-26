import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './app.material';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ReportsComponent,DialogContentExample } from './pages/reports/reports.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ReportService } from './services/report.service';
import {Ng2PaginationModule} from 'ng2-pagination';

import { ChartsModule } from 'ng2-charts';
import { AuthGuard } from './_guards/index';

import {  AuthenticationService } from './services/authentication.service';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    ReportsComponent,
    DialogContentExample,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule

   ],
  providers: [ReportService,AuthGuard,AuthenticationService,DatePipe],
  entryComponents: [
    DialogContentExample
],
  bootstrap: [AppComponent]
})
export class AppModule { }
