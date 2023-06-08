import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './Public/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './Public/menu/menu.component';
import { RolesComponent } from './Role_Based/roles/roles.component';
import { ReportsComponent } from './reports/reports.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { TechnicianComponent } from './Role_Based/technician/technician.component';
import { PharmacistComponent } from './Role_Based/pharmacist/pharmacist.component';
import { PurchaserComponent } from './Role_Based/purchaser/purchaser.component';
import { ManagerComponent } from './Role_Based/manager/manager.component';
import { ApiDocsComponent } from './Public/api-docs/api-docs.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'dashboard', component: InventoryManagementComponent},
  { path: 'technician', component: TechnicianComponent },
  { path: 'pharmacist', component: PharmacistComponent },
  { path: 'purchaser', component: PurchaserComponent },
  { path: 'manager', component: ManagerComponent },
  { path: 'api-docs', component: ApiDocsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
