import { UrlSegmentGroup } from "@angular/router";

export class User {
    name: string;
    surname!: string;
    date!: string;
    gender!: string;
    nationality!: string;
    cf!: string;
    address!: string;
    cap!: string;
    phone_number!: string;
    email!: string;
    password!: string;
    boat_licence!: string;

    constructor() {
        this.name = "";
    }

}

