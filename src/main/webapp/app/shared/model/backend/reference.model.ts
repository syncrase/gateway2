export interface IReference {
    id?: number;
    description?: string;
    livreId?: number;
    pageWebId?: number;
    interactionPlantePlanteId?: number;
}

export class Reference implements IReference {
    constructor(
        public id?: number,
        public description?: string,
        public livreId?: number,
        public pageWebId?: number,
        public interactionPlantePlanteId?: number
    ) {}
}
