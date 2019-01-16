export interface IRichesseSol {
    id?: number;
    richesseSol?: string;
}

export class RichesseSol implements IRichesseSol {
    constructor(public id?: number, public richesseSol?: string) {}
}
