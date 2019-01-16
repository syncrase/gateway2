export interface IEnsoleillement {
    id?: number;
    ensoleillement?: string;
}

export class Ensoleillement implements IEnsoleillement {
    constructor(public id?: number, public ensoleillement?: string) {}
}
