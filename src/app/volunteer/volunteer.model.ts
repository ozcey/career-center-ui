export interface VolunteerResponse {
    volunteer: Volunteer;
    companies: Company[];
}

export interface VolunteerRequest {
    volunteer: Volunteer;
    companies: Company[];
}

export interface Volunteer {
    id?: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    jobTitle: string;
    industry: string;
    otherIndustries: any;
    yearsOfExperience: number;
    languages: any;
    address: {
        id?: number;
        street: string;
        city: string;
        state: string;
        zipcode: string;
    };
}

export interface Company {
    id?: number;
    name:string;
    city: string;
    state: string;
}
