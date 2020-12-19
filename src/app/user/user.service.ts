import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "./user.model";

@Injectable({ providedIn: 'root' })
export class UserService {
    userChanged = new Subject<User[]>();
    users: User[] = [];
    constructor(private http: HttpClient) { }

    findAllUsers() {
        const url = `${environment.userURL}`;
        this.http.get<User[]>(url, this.getHttpOptions()).subscribe(users => {
            this.users = users;
            this.userChanged.next([...this.users]);
        }, error => {
            console.log(error);
            this.userChanged.next(null);
        })
    }

    findUserById(id: number){
        const url = `${environment.userURL}/id/${id}`;
        return this.http.get<User>(url, this.getHttpOptions());
    }

    findUserByEmail(email: string) {
        const url = `${environment.userURL}/email/${email}`;
        return this.http.get<User>(url, this.getHttpOptions());
    }

    findUserByUsername(username: string) {
        const url = `${environment.userURL}/username/${username}`;
        return this.http.get<User>(url, this.getHttpOptions());
    }

    createUser(user: User) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const url = `${environment.userURL}/signup`;
        return this.http.post<User>(url, user, httpOptions);
    }

    updateUser(user: User){
        const url = `${environment.userURL}/update`;
        return this.http.put<User>(url, user, this.getHttpOptions());
    }

    deleteUser(id: number){
        const url = `${environment.userURL}/delete/${id}`;
        return this.http.delete(url, this.getHttpOptions());
    }

    getHttpOptions() {
        const jwt = localStorage.getItem('jwt');
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + jwt
            })
        };
        return httpOptions;
    }



}