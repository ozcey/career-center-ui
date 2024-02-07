// export interface VolunteerResponse {
//     volunteer: Volunteer;
//     companies: Company[];
// }

// export interface VolunteerRequest {
//     volunteer: Volunteer;
//     companies: Company[];
// }

export interface Volunteer {
    id?: number;
    name: string;
    phone: string;
    email: string;
    jobTitle: string;
    industry: string;
    areaOfInterest: string;
}

// export interface Company {
//     id?: number;
//     name:string;
//     city: string;
//     state: string;
// }
