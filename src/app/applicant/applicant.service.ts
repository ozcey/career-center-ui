import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Applicant } from './applicant.model';
@Injectable({ providedIn: 'root' })
export class ApplicantService {
    applicantsChanged = new Subject<Applicant[]>();
    applicants: Applicant[] = [];

    constructor(private http: HttpClient) { }

    findAllApplicants() {
        const url = `${environment.applicantURL}`;
        this.http.get<Applicant[]>(url, this.getHttpOptions()).subscribe(applicants => {
            this.applicants = applicants;
            this.applicantsChanged.next([...this.applicants]);
        }, error => {
            console.log(error);
                this.applicantsChanged.next(null);
        })
    }

    findApplicantById(id: number) {
        const url = `${environment.applicantURL}/id/${id}`;
        return this.http.get<Applicant>(url, this.getHttpOptions());
    }

     findApplicantByEmail(email: string) {
        const url = `${environment.applicantURL}/email/${email}`;
        return this.http.get<Applicant>(url, this.getHttpOptions());
    }

    createApplicant(applicant: Applicant) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        const url = `${environment.applicantURL}/save`;
        return this.http.post<Applicant>(url, applicant, httpOptions);
    }

    updateApplicant(Applicant: Applicant) {
        const url = `${environment.applicantURL}/update`;
        return this.http.put<Applicant>(url, Applicant, this.getHttpOptions());
    }

    deleteApplicant(id: number) {
        const url = `${environment.applicantURL}/delete/${id}`;
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