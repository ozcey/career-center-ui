import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Applicant } from "./applicant.model";
import { ApplicantService } from "./applicant.service";

@Injectable({providedIn: 'root'})
export class ApplicantResolverService implements Resolve<Applicant> {

    constructor(private applicantService: ApplicantService) { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Applicant> | Promise<Applicant> | Applicant {
        return this.applicantService.findApplicantById(route.params['id']);
    }
}
