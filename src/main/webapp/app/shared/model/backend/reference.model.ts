import { ILivre } from 'app/shared/model/backend/livre.model';
import { IPageWeb } from 'app/shared/model/backend/page-web.model';
import { IInteractionPlantePlante } from 'app/shared/model/backend/interaction-plante-plante.model';

export interface IReference {
    id?: number;
    description?: string;
    livre?: ILivre;
    pageWeb?: IPageWeb;
    interactionPlantePlante?: IInteractionPlantePlante;
}

export class Reference implements IReference {
    constructor(
        public id?: number,
        public description?: string,
        public livre?: ILivre,
        public pageWeb?: IPageWeb,
        public interactionPlantePlante?: IInteractionPlantePlante
    ) {}
}
