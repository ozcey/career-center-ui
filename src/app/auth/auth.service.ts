import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { SnackbarService } from '../utility/snackbar.service';
import { User } from '../user/user.model';
import { AuthData, AuthUser } from './auth-data.model';

@Injectable({providedIn: 'root'})
export class AuthService {
    authChange = new BehaviorSubject<boolean>(false);
    $username = new BehaviorSubject<string>(null);
    $isAdmin = new BehaviorSubject<boolean>(false);
    isAuthenticated = false;

    constructor(private http: HttpClient,
        private router: Router,
        private snackbar: SnackbarService) { }

    signUp(user: User) {
        const url = `${environment.authURL}/signup`;
        return this.http.post<User>(url, user, this.getHttpOptions());
    }

    login(authUser: AuthUser) {
        const user = {
            username: authUser.username,
            password: authUser.password
        };

        const url = `${environment.authURL}/login`;

        this.http.post<AuthData>(url, user, this.getHttpOptions()).subscribe(token => {
            console.log(token);
            localStorage.setItem('jwt', token.token);
            localStorage.setItem('username', authUser.username);
            this.$username.next(localStorage.getItem('username'));
            this.authChange.next(true);
            this.isAuthenticated = true;
            this.router.navigate(['/user']);
        }, error => {
            this.snackbar.showSnackbar('Please enter a valid email and password!', null, 5000, 'bottom');
            this.authChange.next(false);
            this.$username.next(null);
            this.isAuthenticated = false;
            this.$isAdmin.next(false);
        });
    }

    logout() {
        this.authChange.next(false);
        this.$username.next(null);
        this.isAuthenticated = false;
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    initAuth() {
        const token = localStorage.getItem('jwt');
        const username = localStorage.getItem('username');
        if (!token) {
            return;
        }
        if (token) {
            this.authChange.next(true);
            this.$username.next(username);
            this.isAuthenticated = true;
        }

    }

    isAuth() {
        return this.isAuthenticated;
    }

    getHttpOptions() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return httpOptions;
    }
}
