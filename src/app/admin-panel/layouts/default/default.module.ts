import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { DefaultComponent } from './default.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { CrudService } from '../../shared/crud.service';
import { DoctorsComponent } from '../../modules/doctors/doctors.component';
import { AdminSuppliersComponent } from '../../modules/admin-suppliers/admin-suppliers.component';
import { AdminSpasComponent } from '../../modules/admin-spas/admin-spas.component';
import { AdminUsersComponent } from '../../modules/admin-users/admin-users.component';
import { AdminSupplierEditComponent } from '../../modules/admin-supplier-edit/admin-supplier-edit.component'





@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    DoctorsComponent,
    AdminSuppliersComponent,
    AdminSpasComponent,
    AdminUsersComponent,
    AdminSupplierEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [CrudService]
})
export class DefaultModule { }
