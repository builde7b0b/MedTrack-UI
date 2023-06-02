import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

import {MatIconModule } from '@angular/material/icon'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryManagementComponent,
    DashboardComponent,
    ReportsComponent,
    HomeComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MenuComponent,
   MatChipsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
