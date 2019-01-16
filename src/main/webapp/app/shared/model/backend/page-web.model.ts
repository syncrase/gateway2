import { IReference } from 'app/shared/model/backend/reference.model';

export interface IPageWeb {
    id?: number;
    description?: string;
    url?: string;
    reference?: IReference;
}

export class PageWeb implements IPageWeb {
    constructor(public id?: number, public description?: string, public url?: string, public reference?: IReference) {}
}
