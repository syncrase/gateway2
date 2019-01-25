export interface ILivre {
    id?: number;
    description?: string;
    isbn?: string;
    auteur?: string;
    page?: number;
    referenceId?: number;
}

export class Livre implements ILivre {
    constructor(
        public id?: number,
        public description?: string,
        public isbn?: string,
        public auteur?: string,
        public page?: number,
        public referenceId?: number
    ) {}
}
