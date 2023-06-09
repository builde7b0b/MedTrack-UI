import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';

import {MatIconModule } from '@angular/material/icon'
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule, TooltipComponent} from '@angular/material/tooltip';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MatInput, MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { Router, RouterModule } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';

import {Sort, MatSortModule} from '@angular/material/sort';
import {NgFor} from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TechnicianComponent } from './technician/technician.component';
import { PharmacistComponent } from './pharmacist/pharmacist.component';
import { PurchaserComponent } from './purchaser/purchaser.component';
import { ManagerComponent } from './manager/manager.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { ApiDocsComponent } from './api-docs/api-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryManagementComponent,
    DashboardComponent,
    ReportsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RolesComponent,
    MenuComponent,
    TechnicianComponent,
    PharmacistComponent,
    PurchaserComponent,
    ManagerComponent,
    ApiDocsComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    
   MatChipsModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule,
    FormsModule,
    RouterModule,
    
   MatGridListModule,
   MatTabsModule,
   MatSortModule,
   NgFor,
   MatSnackBarModule,
   MatProgressSpinnerModule,
   MatTableModule,
  MatRadioModule,
  MatTooltipModule,
  MatBadgeModule,
  MatDividerModule,
  HttpClientModule,
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
