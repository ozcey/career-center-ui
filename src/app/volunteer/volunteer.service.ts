import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Volunteer } from './volunteer.model';


@Injectable({ providedIn: 'root' })
export class VolunteerService {

    constructor(private http: HttpClient) { }

    createVolunteer(volunteer: Volunteer) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        const url = `${environment.volunteerURL}/save`;
        return this.http.post<Volunteer>(url, volunteer, httpOptions);
    }

}