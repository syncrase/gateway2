import { IReference } from 'app/shared/model/backend/reference.model';

export interface ILivre {
    id?: number;
    description?: string;
    isbn?: string;
    auteur?: string;
    page?: number;
    reference?: IReference;
}

export class Livre implements ILivre {
    constructor(
        public id?: number,
        public description?: string,
        public isbn?: string,
        public auteur?: string,
        public page?: number,
        public reference?: IReference
    ) {}
}
