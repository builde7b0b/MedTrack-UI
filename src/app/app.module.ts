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
import {MatCardModule} from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './Public/home/home.component';
import { LoginComponent } from './login/login.component';
import {MatInput, MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { Router, RouterModule } from '@angular/router';
import { RolesComponent } from './Role_Based/roles/roles.component';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';

import {Sort, MatSortModule} from '@angular/material/sort';
import {NgFor} from '@angular/common';
import { MenuComponent } from './Public/menu/menu.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TechnicianComponent } from './Role_Based/technician/technician.component';
import { PharmacistComponent } from './Role_Based/pharmacist/pharmacist.component';
import { PurchaserComponent } from './Role_Based/purchaser/purchaser.component';
import { ManagerComponent } from './Role_Based/manager/manager.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';
import { ApiDocsComponent } from './Public/api-docs/api-docs.component';
import { FooterComponent } from './Public/footer/footer.component';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { DashboardTabsComponent } from './dashboard-tabs/dashboard-tabs.component';
import { ManagerTabsComponent } from './Role_Based/manager-tabs/manager-tabs.component';
import { PharmacistTabsComponent } from './Role_Based/pharmacist-tabs/pharmacist-tabs.component';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ElementRef,
} from '@angular/core';
import {
  ComponentPortal,
  DomPortal,
  Portal,
  TemplatePortal,
  PortalModule,
} from '@angular/cdk/portal';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { TransfersGridListComponent } from './transfers-grid-list/transfers-grid-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import { OrderListComponent } from './order-list/order-list.component';






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
    
    ApiDocsComponent,
    FooterComponent,
    HomeCardsComponent,
    DashboardTabsComponent,
    ManagerTabsComponent,
    PharmacistTabsComponent,
    TransfersGridListComponent,
    OrderListComponent,
    
    
    
    
  ],
  imports: [
    MatSnackBarModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
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

  MatBottomSheetModule,
  CdkAccordionModule,
  MatExpansionModule,
  MatPaginatorModule,
 
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
