import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPlantCommonName } from 'app/shared/model/backend/plant-common-name.model';
import { PlantCommonNameService } from './';

type EntityResponseType = HttpResponse<IPlantCommonName>;
type EntityArrayResponseType = HttpResponse<IPlantCommonName[]>;

@Injectable({ providedIn: 'root' })
export class PlantCommonNameServiceFacade {
    constructor(protected http: HttpClient, private plantCommonNameService: PlantCommonNameService) {}

    create(plantCommonName: IPlantCommonName): Observable<EntityResponseType> {
        return this.plantCommonNameService.create(plantCommonName);
    }

    update(plantCommonName: IPlantCommonName): Observable<EntityResponseType> {
        return this.plantCommonNameService.update(plantCommonName);
    }

    find(id: number): Observable<EntityResponseType> {
        return this.plantCommonNameService.find(id);
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        return this.plantCommonNameService.query(req);
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.plantCommonNameService.delete(id);
    }

    searchByPlantCommonName(term: string): Observable<EntityArrayResponseType> {
        return this.http.get<IPlantCommonName[]>(`${this.plantCommonNameService.resourceUrl}?commonName.contains=${term}`, {
            observe: 'response'
        });
    }
}
