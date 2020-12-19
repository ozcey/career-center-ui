import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Injectable({providedIn: 'root'})
export class UserResolverService implements Resolve<User> {

    constructor(private userService: UserService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<User> | Promise<User> | User {
        return this.userService.findUserById(route.params['id']);
    }
}
