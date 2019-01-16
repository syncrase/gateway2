export interface IVitesseCroissance {
    id?: number;
    vitesseCroissance?: string;
}

export class VitesseCroissance implements IVitesseCroissance {
    constructor(public id?: number, public vitesseCroissance?: string) {}
}
