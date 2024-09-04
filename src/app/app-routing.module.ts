import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantListComponent } from './applicant/applicant-list/applicant-list.component';
import { ApplicantResolverService } from './applicant/applicant-resolver.service';
import { ApplicantComponent } from './applicant/applicant.component';
import { NewApplicantComponent } from './applicant/new-applicant/new-applicant.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { NewContactComponent } from './contact/new-contact/new-contact.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserResolverService } from './user/user-resolver.service';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './utility/not-found.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerHomeComponent } from './volunteer/volunteer-home/volunteer-home.component';
import { VolunteerSignupComponent } from './volunteer/volunteer-signup/volunteer-signup.component';
import { ApplicantHomeComponent } from './applicant/applicant-home/applicant-home.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'applicant', component: ApplicantComponent, children: [
            { path: '', component: ApplicantHomeComponent },
            { path: 'new', component: NewApplicantComponent },
            { path: ':id/edit', component: NewApplicantComponent, canActivate: [AuthGuard], resolve: { applicantResolver: ApplicantResolverService } },
            { path: 'list', canActivate: [AuthGuard], component: ApplicantListComponent }
        ]
    },
    { path: 'volunteer', component: VolunteerComponent, children: [
        { path: '', component: VolunteerHomeComponent },
        { path: 'signup', component: VolunteerSignupComponent },

    ] },
    {
        path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
            { path: '', component: UserListComponent },
            { path: ':id/edit', component: NewUserComponent, resolve: {userResolver: UserResolverService} },
            { path: 'new', component: NewUserComponent }
        ]
    },
    {
        path: 'contact', component: ContactComponent, canActivate: [AuthGuard], children: [
            { path: '', component: ContactListComponent },
            { path: 'new', component: NewContactComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'courses', component: CourseListComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
