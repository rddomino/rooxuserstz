export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface ICompany {
    name: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: IAddress;
    company: ICompany;
}

export interface Ihttphook {
    url: string;
}