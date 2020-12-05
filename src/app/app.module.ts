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
import { ReactiveFormsModule } from '@angular/forms';


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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
