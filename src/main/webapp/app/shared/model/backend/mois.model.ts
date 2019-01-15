import { IRecolte } from 'app/shared/model/backend/recolte.model';
import { IFloraison } from 'app/shared/model/backend/floraison.model';

export interface IMois {
    id?: number;
    mois?: string;
    recoltes?: IRecolte[];
    floraisons?: IFloraison[];
}

export class Mois implements IMois {
    constructor(public id?: number, public mois?: string, public recoltes?: IRecolte[], public floraisons?: IFloraison[]) {}
}
