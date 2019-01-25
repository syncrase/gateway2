export interface IClassificationCronquist {
    id?: number;
    ordreName?: string;
    ordreId?: number;
    familleName?: string;
    familleId?: number;
    genreName?: string;
    genreId?: number;
    especeName?: string;
    especeId?: number;
}

export class ClassificationCronquist implements IClassificationCronquist {
    constructor(
        public id?: number,
        public ordreName?: string,
        public ordreId?: number,
        public familleName?: string,
        public familleId?: number,
        public genreName?: string,
        public genreId?: number,
        public especeName?: string,
        public especeId?: number
    ) {}
}
