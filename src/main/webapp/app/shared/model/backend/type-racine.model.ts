export interface ITypeRacine {
    id?: number;
    typeRacine?: string;
}

export class TypeRacine implements ITypeRacine {
    constructor(public id?: number, public typeRacine?: string) {}
}
