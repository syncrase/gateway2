export interface IFloraison {
    id?: number;
    planteId?: number;
    moisId?: number;
}

export class Floraison implements IFloraison {
    constructor(public id?: number, public planteId?: number, public moisId?: number) {}
}
