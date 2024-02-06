import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicantComponent } from './applicant/applicant.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NewVolunteerComponent } from './volunteer/new-volunteer/new-volunteer.component';
import { NewApplicantComponent } from './applicant/new-applicant/new-applicant.component';
import { ApplicantListComponent } from './applicant/applicant-list/applicant-list.component';
import { VolunteerListComponent } from './volunteer/volunteer-list/volunteer-list.component';
import { NotFoundComponent } from './utility/not-found.component';
import { FooterComponent } from './utility/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserModalComponent } from './user/user-modal.component';
import { ContactComponent } from './contact/contact.component';
import { NewContactComponent } from './contact/new-contact/new-contact.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { VolunteerHomeComponent } from './volunteer/volunteer-home/volunteer-home.component';
import { VolunteerSignupComponent } from './volunteer/volunteer-signup/volunteer-signup.component';
import { ApplicantHomeComponent } from './applicant/applicant-home/applicant-home.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    VolunteerComponent,
    UserComponent,
    AuthComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    NewVolunteerComponent,
    NewApplicantComponent,
    ApplicantListComponent,
    VolunteerListComponent,
    NotFoundComponent,
    FooterComponent,
    UserListComponent,
    NewUserComponent,
    UserModalComponent,
    ContactComponent,
    NewContactComponent,
    ContactListComponent,
    VolunteerHomeComponent,
    VolunteerSignupComponent,
    ApplicantHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserModalComponent]
})
export class AppModule { }
