import { BlogupdateComponent } from './blog/blogupdate/blogupdate.component';
import { DoctorprofileEditComponent } from './profile/doctor-profile/doctorprofile-edit/doctorprofile-edit.component';
import { SpaOwnerProfileComponent } from './profile/spa-owner-profile/spa-owner-profile.component';
import { DoctorProfileComponent } from './profile/doctor-profile/doctor-profile.component';
import { DoctorSignupComponent } from './signup/doctor-signup/doctor-signup.component';
import { SpaOwnerSignupComponent } from './signup/spa-owner-signup/spa-owner-signup.component';
import { UserSignupComponent } from './signup/user-signup/user-signup.component';
import { SpaownerLoginComponent } from './login/spaowner-login/spaowner-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { DoctorLoginComponent } from './login/doctor-login/doctor-login.component';
import { BlogStartComponent } from './blog/blog-start/blog-start.component';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogDashboartComponent } from './blog/blog-dashboart/blog-dashboart.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { LoginComponent } from './login/login.component';

import {SpaLoginComponent} from './spa/spa-login/spa-login.component';
import {SpaRegComponent} from './spa/spa-reg/spa-reg.component';
import {SpaUpdateComponent} from './spa/spa-update/spa-update.component';
import {SpaViewComponent} from './spa/spa-view/spa-view.component';
import {ImageGalleryComponent} from './spa/image-gallery/image-gallery.component';

import { MedicalSearchComponent } from './medical-search/medical-search.component';
import { SpaComponent } from './spa/spa.component';
import { DoctorChannelSearchComponent } from './doctor-channel/search/doctor-channel-search.component';
import { DoctorChannelTimeSlotComponent } from './doctor-channel/time-slot/doctor-channel-time-slot.component';
import { DoctorChannelConfirmBookingComponent } from './doctor-channel/confirm-booking/doctor-channel-confirm-booking.component';
import { DoctorChannelPatientDetailComponent } from './doctor-channel/patient-detail/doctor-channel-patient-detail.component';
import { DoctorSearchComponent } from './doctor-search/doctor-search.component';
import { DoctorViewComponent } from './view_profiles/doctor-view/doctor-view.component';
import { SupplierViewComponent } from './view_profiles/supplier-view/supplier-view.component';
import { SpaViewComponent1 } from './view_profiles/spa-view/spa-view.component';
import { DefaultComponent } from './admin-panel/layouts/default/default.component';
import { DashboardComponent } from './admin-panel/modules/dashboard/dashboard.component';
import { DoctorsComponent } from './admin-panel/modules/doctors/doctors.component';

import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import{SpaforgottenPwdComponent} from './spa/spaforgotten-pwd/spaforgotten-pwd.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { BlogViewComponent } from './blog/blog-list/blog-view/blog-view.component';
import { AdminSuppliersComponent } from './admin-panel/modules/admin-suppliers/admin-suppliers.component';
import { AdminSpasComponent } from './admin-panel/modules/admin-spas/admin-spas.component';
import { AdminUsersComponent } from './admin-panel/modules/admin-users/admin-users.component';

import { SupplierLoginComponent } from './supplier/supplier-login/supplier-login.component';
import { SupplierRegComponent } from './supplier/supplier-reg/supplier-reg.component';
import { SupplierUpdateComponent } from './supplier/supplier-update/supplier-update.component';
import { SupplierLoginViewComponent } from './supplier/supplier-login-view/supplier-login-view.component';
import {SpaArticleComponent} from './spa/spa-article/spa-article.component';
import { AdminSupplierEditComponent } from './admin-panel/modules/admin-supplier-edit/admin-supplier-edit.component'
import { AdminLoginComponent } from './admin-login/admin-login.component';



const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing',          component: LandingComponent },
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent},
    { path: 'edit/:id', component: EditProfileComponent},
    { path: 'doctor-profile', component: DoctorProfileComponent, children: [
      { path: 'new', component: BlogEditComponent},
      // { path: ':id', component: BlogEditComponent},

    ]},
  { path: 'docedit/:id', component: DoctorprofileEditComponent},
    {path:'spa-article',component:SpaArticleComponent},
    { path: 'SpaOwner-profile', component: SpaOwnerProfileComponent},
    { path: 'profile', component: ProfileComponent},
  {path: 'spa-log', component:SpaLoginComponent},
    {path: 'spa-reg', component:SpaRegComponent},
    {path: 'spa-update', component:SpaUpdateComponent},
    {path: 'spa-view', component:SpaViewComponent},
    {path:'spa-gallery',component:ImageGalleryComponent},
   
    {path:'spa-pwd',component:SpaforgottenPwdComponent},
   
  
    { path: 'register',           component: SignupComponent, children: [
      { path: '', component: UserSignupComponent},
      { path: 'doctor', component: DoctorSignupComponent},
      { path: 'spa', component: SpaOwnerSignupComponent},
      // { path: 'supplier', component: SpaOwnerSignupComponent}
    ] },
    { path: 'Forgetpwd',          component: ForgetpwdComponent },
    { path: 'login',          component: LoginComponent, children: [
      { path: '', component: UserLoginComponent},
      { path: 'doctor', component: DoctorLoginComponent},
      { path: 'spa', component: SpaownerLoginComponent}

    ] },
    {path: 'supplier-log', component:SupplierLoginComponent},
    {path: 'supplier-reg', component:SupplierRegComponent},
    {path: 'supplier-update', component:SupplierUpdateComponent},
    {path: 'supplier-view', component:SupplierLoginViewComponent},

    { path: 'blog',          component: BlogComponent, children: [
      { path: '', component: BlogStartComponent},
      { path: 'new', component: BlogEditComponent},
      { path: 'view/:id', component: BlogDetailsComponent},
      { path: ':id/edit', component: BlogEditComponent}
    ] },
    { path: 'doctor-channel-search',          component: DoctorChannelSearchComponent },
    { path: 'doctor-channel-time-slot',          component: DoctorChannelTimeSlotComponent },
    { path: 'doctor-channel-confirm-booking', component: DoctorChannelConfirmBookingComponent },
    { path: 'doctor-channel-patient-detail', component: DoctorChannelPatientDetailComponent },
    { path: 'blogview/:id', component: BlogViewComponent},
    { path: 'blog/:id',          component: BlogDetailsComponent },
    { path: 'blogupdate/:id',          component: BlogupdateComponent },

    { path: 'dashboard',          component: BlogDashboartComponent },
    { path: 'medicine',          component: MedicalSearchComponent },
    { path: 'spa',          component: SpaComponent },
    { path: 'doctor-search',          component: DoctorSearchComponent },
    { path: 'doctor-view/:id',          component: DoctorViewComponent },
    { path: 'supplier-searchview/:id',          component: SupplierViewComponent },
    { path: 'spa-searchview/:id',          component: SpaViewComponent1 },
    { path: 'admin', component: AdminLoginComponent},

    {path: 'default',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'doctors',
      component: DoctorsComponent 
    },
    {
      path: 'medlist',
      component: AdminSuppliersComponent 
    },
    {
      path: 'spalist',
      component: AdminSpasComponent 
    },
    {
      path: 'userlist',
      component: AdminUsersComponent 
    },
    {
      path: 'supplieredit/:id',
      component: AdminSupplierEditComponent 
    }
    ]
    },
    { path: '', redirectTo: 'landing', pathMatch: 'full' }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
