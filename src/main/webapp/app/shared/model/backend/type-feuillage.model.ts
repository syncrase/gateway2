export interface ITypeFeuillage {
    id?: number;
    typeFeuillage?: string;
}

export class TypeFeuillage implements ITypeFeuillage {
    constructor(public id?: number, public typeFeuillage?: string) {}
}
