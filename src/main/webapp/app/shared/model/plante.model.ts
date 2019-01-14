import { IClassificationCronquist } from 'app/shared/model/backend/classification-cronquist.model';
import { IStrate } from 'app/shared/model/backend/strate.model';
import { IVitesseCroissance } from 'app/shared/model/backend/vitesse-croissance.model';
import { IEnsoleillement } from 'app/shared/model/backend/ensoleillement.model';
import { IRichesseSol } from 'app/shared/model/backend/richesse-sol.model';
import { ITypeTerre } from 'app/shared/model/backend/type-terre.model';
import { ITypeFeuillage } from 'app/shared/model/backend/type-feuillage.model';
import { ITypeRacine } from 'app/shared/model/backend/type-racine.model';
import { IRecolte } from 'app/shared/model//recolte.model';
import { IFloraison } from 'app/shared/model//floraison.model';

export interface IPlante {
    id?: number;
    phMin?: string;
    phMax?: string;
    tempMin?: number;
    tempMax?: number;
    classificationCronquist?: IClassificationCronquist;
    strate?: IStrate;
    vitesseCroissance?: IVitesseCroissance;
    ensoleillement?: IEnsoleillement;
    richesseSol?: IRichesseSol;
    typeTerre?: ITypeTerre;
    typeFeuillage?: ITypeFeuillage;
    typeRacine?: ITypeRacine;
    recoltes?: IRecolte[];
    floraisons?: IFloraison[];
}

export class Plante implements IPlante {
    constructor(
        public id?: number,
        public phMin?: string,
        public phMax?: string,
        public tempMin?: number,
        public tempMax?: number,
        public classificationCronquist?: IClassificationCronquist,
        public strate?: IStrate,
        public vitesseCroissance?: IVitesseCroissance,
        public ensoleillement?: IEnsoleillement,
        public richesseSol?: IRichesseSol,
        public typeTerre?: ITypeTerre,
        public typeFeuillage?: ITypeFeuillage,
        public typeRacine?: ITypeRacine,
        public recoltes?: IRecolte[],
        public floraisons?: IFloraison[]
    ) {}
}
