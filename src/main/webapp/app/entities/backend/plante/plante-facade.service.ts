import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPlante } from 'app/shared/model/backend/plante.model';
import { PlanteService } from './';

type EntityResponseType = HttpResponse<IPlante>;
type EntityArrayResponseType = HttpResponse<IPlante[]>;

@Injectable({ providedIn: 'root' })
export class PlanteServiceFacade {
    constructor(protected http: HttpClient, private planteService: PlanteService) {}

    create(plante: IPlante): Observable<EntityResponseType> {
        return this.planteService.create(plante);
    }

    update(plante: IPlante): Observable<EntityResponseType> {
        return this.planteService.update(plante);
    }

    find(id: number): Observable<EntityResponseType> {
        return this.planteService.find(id);
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        return this.planteService.query(req);
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.planteService.delete(id);
    }

    searchByPlantId(term: string): Observable<EntityArrayResponseType> {
        // http://localhost:8080/backend2/api/plantes/?id=1
        return this.http.get<IPlante[]>(`${this.planteService.resourceUrl}?id.equals=${term}`, { observe: 'response' });
    }

    searchPlantsByPlantCommonNameIds(ids: string): Observable<EntityArrayResponseType> {
        // ids = '1,2,3';
        return this.http.get<IPlante[]>(`${this.planteService.resourceUrl}?plantCommonNameId.in=${ids}`, { observe: 'response' });
    }
}
