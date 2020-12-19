import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantComponent } from './applicant/applicant.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { NotFoundComponent } from './utility/not-found.component';
import { VolunteerComponent } from './volunteer/volunteer.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'applicant', component: ApplicantComponent},
    { path: 'volunteer', component: VolunteerComponent },
    {
        path: 'user', component: UserComponent, children: [
            { path: '', component: UserListComponent },
            // { path: ':id/edit', component: NewUserComponent },
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
