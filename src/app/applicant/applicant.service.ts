import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Applicant } from './applicant.model';


@Injectable({ providedIn: 'root' })
export class ApplicantService {

    constructor(private http: HttpClient) { }

    createVolunteer(applicant: Applicant) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        const url = `${environment.applicantURL}/save`;
        return this.http.post<Applicant>(url, applicant, httpOptions);
    }

}