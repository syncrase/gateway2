import { IOrdre } from 'app/shared/model/backend/ordre.model';
import { IFamille } from 'app/shared/model/backend/famille.model';
import { IGenre } from 'app/shared/model/backend/genre.model';
import { IEspece } from 'app/shared/model/backend/espece.model';

export interface IClassificationCronquist {
    id?: number;
    ordre?: IOrdre;
    famille?: IFamille;
    genre?: IGenre;
    espece?: IEspece;
}

export class ClassificationCronquist implements IClassificationCronquist {
    constructor(public id?: number, public ordre?: IOrdre, public famille?: IFamille, public genre?: IGenre, public espece?: IEspece) {}
}
