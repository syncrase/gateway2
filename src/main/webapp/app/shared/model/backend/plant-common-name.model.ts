import { IPlante } from 'app/shared/model/backend/plante.model';

export interface IPlantCommonName {
    id?: number;
    commonName?: string;
    plantes?: IPlante[];
}

export class PlantCommonName implements IPlantCommonName {
    constructor(public id?: number, public commonName?: string, public plantes?: IPlante[]) {}
}
