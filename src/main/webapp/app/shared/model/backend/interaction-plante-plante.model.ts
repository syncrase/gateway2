import { IReference } from 'app/shared/model/backend/reference.model';

export interface IInteractionPlantePlante {
    id?: number;
    notation?: string;
    description?: string;
    references?: IReference[];
    dePlanteId?: number;
    versPlanteId?: number;
}

export class InteractionPlantePlante implements IInteractionPlantePlante {
    constructor(
        public id?: number,
        public notation?: string,
        public description?: string,
        public references?: IReference[],
        public dePlanteId?: number,
        public versPlanteId?: number
    ) {}
}
