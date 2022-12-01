import { UrlSegmentGroup } from "@angular/router";

export class Boat {
    licencePlate: string;
    name: string;
    colour: string;
    navigationLicence: string;
    power: string;
    declarationOfConformity: string;
    rca: string;

    constructor() {
        this.licencePlate = "";
        this.name = "";
        this.colour = "";
        this.navigationLicence = "";
        this.power = "";
        this.declarationOfConformity = "";
        this.rca = "";
    }

}
