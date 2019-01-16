export interface ITypeTerre {
    id?: number;
    typeTerre?: string;
}

export class TypeTerre implements ITypeTerre {
    constructor(public id?: number, public typeTerre?: string) {}
}
