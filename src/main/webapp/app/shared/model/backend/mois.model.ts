export interface IMois {
    id?: number;
    mois?: string;
}

export class Mois implements IMois {
    constructor(public id?: number, public mois?: string) {}
}
