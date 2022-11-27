import { UrlSegmentGroup } from "@angular/router";

export class Boat {
    licence_plate: string;
    name: string;
    colour: string;
    navigation_licence: string;
    power: string;
    declaration_of_conformity: string;
    rca: string;

    constructor() {
        this.licence_plate = "";
        this.name = "";
        this.colour = "";
        this.navigation_licence = "";
        this.power = "";
        this.declaration_of_conformity = "";
        this.rca = "";
    }

}
