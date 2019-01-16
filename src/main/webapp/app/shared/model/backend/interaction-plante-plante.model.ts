import { IReference } from 'app/shared/model/backend/reference.model';
import { IPlante } from 'app/shared/model/backend/plante.model';

export interface IInteractionPlantePlante {
    id?: number;
    notation?: string;
    description?: string;
    references?: IReference[];
    dePlante?: IPlante;
    versPlante?: IPlante;
}

export class InteractionPlantePlante implements IInteractionPlantePlante {
    constructor(
        public id?: number,
        public notation?: string,
        public description?: string,
        public references?: IReference[],
        public dePlante?: IPlante,
        public versPlante?: IPlante
    ) {}
}
