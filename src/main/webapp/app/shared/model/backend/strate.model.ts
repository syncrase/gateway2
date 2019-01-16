export interface IStrate {
    id?: number;
    strate?: string;
}

export class Strate implements IStrate {
    constructor(public id?: number, public strate?: string) {}
}
