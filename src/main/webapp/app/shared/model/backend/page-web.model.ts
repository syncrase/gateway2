export interface IPageWeb {
    id?: number;
    description?: string;
    url?: string;
    referenceId?: number;
}

export class PageWeb implements IPageWeb {
    constructor(public id?: number, public description?: string, public url?: string, public referenceId?: number) {}
}
