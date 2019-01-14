import { IPlante } from 'app/shared/model/backend/plante.model';
import { IMois } from 'app/shared/model/backend/mois.model';

export interface IRecolte {
    id?: number;
    plante?: IPlante;
    mois?: IMois;
}

export class Recolte implements IRecolte {
    constructor(public id?: number, public plante?: IPlante, public mois?: IMois) {}
}
