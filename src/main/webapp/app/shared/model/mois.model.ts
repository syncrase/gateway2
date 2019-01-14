import { IRecolte } from 'app/shared/model//recolte.model';
import { IFloraison } from 'app/shared/model//floraison.model';

export interface IMois {
    id?: number;
    mois?: string;
    recoltes?: IRecolte[];
    floraisons?: IFloraison[];
}

export class Mois implements IMois {
    constructor(public id?: number, public mois?: string, public recoltes?: IRecolte[], public floraisons?: IFloraison[]) {}
}
