import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantListComponent } from './applicant/applicant-list/applicant-list.component';
import { ApplicantResolverService } from './applicant/applicant-resolver.service';
import { ApplicantComponent } from './applicant/applicant.component';
import { NewApplicantComponent } from './applicant/new-applicant/new-applicant.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserResolverService } from './user/user-resolver.service';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './utility/not-found.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'applicant', component: ApplicantComponent, canActivate: [AuthGuard], children: [
            { path: '', component: ApplicantListComponent },
            { path: ':id/edit', component: NewApplicantComponent, resolve: { applicantResolver: ApplicantResolverService } },
            { path: 'new', component: NewApplicantComponent }
        ]
    },
    { path: 'volunteer', component: VolunteerComponent },
    {
        path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
            { path: '', component: UserListComponent },
            { path: ':id/edit', component: NewUserComponent, resolve: {userResolver: UserResolverService} },
            { path: 'new', component: NewUserComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {}
