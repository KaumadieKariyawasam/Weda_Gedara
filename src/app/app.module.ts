import { DropDownDirective } from './blog/blog-details/dopdown.directive';
import { DataStorageService } from './blog/blogDataStorage.service';
import { AuthService } from './signup/auth.service';

import { Http, HttpModule } from '@angular/http';
import { ServerService } from './server.service';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {AngularFireModule} from "@angular/fire";

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import {AngularFireList} from 'angularfire2/database';

import {SignupServiceService} from "./shared/signup-service.service";

import {SpaLoginComponent} from './spa/spa-login/spa-login.component';
import {SpaUpdateComponent} from './spa/spa-update/spa-update.component';
import {SpaRegComponent} from './spa/spa-reg/spa-reg.component';
import {SpaViewComponent} from './spa/spa-view/spa-view.component';
import {ImageGalleryComponent} from './spa/image-gallery/image-gallery.component';

import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';

import { HomeModule } from './home/home.module';

import { environment } from './../environments/environment';
import { from } from 'rxjs';
import { BlogDashboartComponent } from './blog/blog-dashboart/blog-dashboart.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogItemComponent } from './blog/blog-list/blog-item/blog-item.component';
import { BlogService } from './blog/blog.service';
import { BlogEditComponent } from './blog/blog-edit/blog-edit.component';
import { BlogStartComponent } from './blog/blog-start/blog-start.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DoctorLoginComponent } from './login/doctor-login/doctor-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { SpaownerLoginComponent } from './login/spaowner-login/spaowner-login.component';
import { UserSignupComponent } from './signup/user-signup/user-signup.component';
import { DoctorSignupComponent } from './signup/doctor-signup/doctor-signup.component';
import { SpaOwnerSignupComponent } from './signup/spa-owner-signup/spa-owner-signup.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';
import { DoctorProfileComponent } from './profile/doctor-profile/doctor-profile.component';
import { SpaOwnerProfileComponent } from './profile/spa-owner-profile/spa-owner-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { MedicalSearchComponent } from './medical-search/medical-search.component';

import {AngularFirestoreModule} from 'angularfire2/firestore';
import { HereMapComponent } from './here-map/here-map.component';
import { SpaComponent } from './spa/spa.component';
import { DoctorSearchComponent } from './doctor-search/doctor-search.component';
import { DoctorViewComponent } from './view_profiles/doctor-view/doctor-view.component';
import { SupplierViewComponent } from './view_profiles/supplier-view/supplier-view.component';
import { SpaViewComponent1 } from './view_profiles/spa-view/spa-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DoctorChannelSearchComponent } from './doctor-channel/search/doctor-channel-search.component';
import { DoctorChannelTimeSlotComponent } from './doctor-channel/time-slot/doctor-channel-time-slot.component';
import { DoctorChannelConfirmBookingComponent } from './doctor-channel/confirm-booking/doctor-channel-confirm-booking.component';
import { DoctorChannelPatientDetailComponent } from './doctor-channel/patient-detail/doctor-channel-patient-detail.component';
import { DefaultComponent } from './admin-panel/layouts/default/default.component';
import { DefaultModule } from './admin-panel/layouts/default/default.module';
import { HeaderComponent } from './admin-panel/shared/components/header/header.component';
import { SidebarComponent } from './admin-panel/shared/components/sidebar/sidebar.component';
import { DoctorsComponent } from './admin-panel/modules/doctors/doctors.component';

import { SpaforgottenPwdComponent } from './spa/spaforgotten-pwd/spaforgotten-pwd.component';


import { StorageServiceModule } from 'angular-webstorage-service';
import { DoctorprofileEditComponent } from './profile/doctor-profile/doctorprofile-edit/doctorprofile-edit.component';
import { BlogupdateComponent } from './blog/blogupdate/blogupdate.component';
import { BlogViewComponent } from './blog/blog-list/blog-view/blog-view.component';
import { SupplierLoginComponent } from './supplier/supplier-login/supplier-login.component';
import { SupplierRegComponent } from './supplier/supplier-reg/supplier-reg.component';
import { SupplierUpdateComponent } from './supplier/supplier-update/supplier-update.component';
import { SupplierLoginViewComponent } from './supplier/supplier-login-view/supplier-login-view.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material';

import { SpaArticleComponent } from './spa/spa-article/spa-article.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,

    SpaLoginComponent,
    SpaRegComponent,
    SpaUpdateComponent,
    SpaViewComponent,
    SpaViewComponent1,
    ImageGalleryComponent,

    BlogComponent,
    ForgetpwdComponent,

    BlogDashboartComponent,
    BlogDetailsComponent,
    BlogListComponent,
    BlogItemComponent,
    DropDownDirective,
    BlogEditComponent,
    BlogStartComponent,
    DoctorLoginComponent,
    UserLoginComponent,
    SpaownerLoginComponent,
    UserSignupComponent,
    DoctorSignupComponent,
    SpaOwnerSignupComponent,
    UserProfileComponent,
    DoctorProfileComponent,
    DoctorChannelSearchComponent,
    DoctorChannelTimeSlotComponent,
    DoctorChannelConfirmBookingComponent,
    DoctorChannelPatientDetailComponent,
    SpaOwnerProfileComponent,
    EditProfileComponent,
    MedicalSearchComponent,
    HereMapComponent,
    SpaComponent,
    DoctorSearchComponent,
    DoctorViewComponent,
    SupplierViewComponent,
    SpaViewComponent,
    SpaforgottenPwdComponent,
    DoctorprofileEditComponent,
    BlogupdateComponent,
    BlogViewComponent,
    SupplierLoginComponent,
    SupplierRegComponent,
    SupplierUpdateComponent,
    SupplierLoginViewComponent,
    ImageGalleryComponent,
    SpaArticleComponent,  
    AdminLoginComponent
    
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'wedhagedara'),
    AngularFirestoreModule.enablePersistence(),
    BrowserAnimationsModule,
    MatButtonModule,
    DefaultModule,
    StorageServiceModule,
    MatDialogModule,
    AngularFireStorageModule,
    MatCardModule
  ],
  providers: [ServerService, AuthService, BlogService, DataStorageService,SignupServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
