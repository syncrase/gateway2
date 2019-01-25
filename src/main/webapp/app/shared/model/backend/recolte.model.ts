export interface IRecolte {
    id?: number;
    planteId?: number;
    moisId?: number;
}

export class Recolte implements IRecolte {
    constructor(public id?: number, public planteId?: number, public moisId?: number) {}
}
