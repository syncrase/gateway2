import { IPlantCommonName } from 'app/shared/model/backend/plant-common-name.model';

export interface IPlante {
    id?: number;
    phMin?: string;
    phMax?: string;
    tempMin?: number;
    tempMax?: number;
    description?: string;
    classificationCronquistId?: number;
    strateId?: number;
    vitesseCroissanceId?: number;
    ensoleillementId?: number;
    richesseSolId?: number;
    typeTerreId?: number;
    typeFeuillageId?: number;
    typeRacineId?: number;
    plantCommonNames?: IPlantCommonName[];
}

export class Plante implements IPlante {
    constructor(
        public id?: number,
        public phMin?: string,
        public phMax?: string,
        public tempMin?: number,
        public tempMax?: number,
        public description?: string,
        public classificationCronquistId?: number,
        public strateId?: number,
        public vitesseCroissanceId?: number,
        public ensoleillementId?: number,
        public richesseSolId?: number,
        public typeTerreId?: number,
        public typeFeuillageId?: number,
        public typeRacineId?: number,
        public plantCommonNames?: IPlantCommonName[]
    ) {}
}
