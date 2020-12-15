export interface Applicant {
    id?: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    category: any;
    age: number;
    gender: string;
    degree: string;
    languages: any;
    address: {
        id?: number;
        street: string;
        city: string;
        state: string;
        zipcode: string;
    };
}

