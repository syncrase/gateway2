import { IRecolte } from 'app/shared/model/backend/recolte.model';
import { IFloraison } from 'app/shared/model/backend/floraison.model';

export interface IMois {
    id?: number;
    mois?: string;
    recolte?: IRecolte;
    floraison?: IFloraison;
}

export class Mois implements IMois {
    constructor(public id?: number, public mois?: string, public recolte?: IRecolte, public floraison?: IFloraison) {}
}
