import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IPlantCommonName } from 'app/shared/model/backend/plant-common-name.model';

type EntityResponseType = HttpResponse<IPlantCommonName>;
type EntityArrayResponseType = HttpResponse<IPlantCommonName[]>;

@Injectable({ providedIn: 'root' })
export class PlantCommonNameService {
    public resourceUrl = SERVER_API_URL + 'backend/api/plant-common-names';

    constructor(protected http: HttpClient) {}

    create(plantCommonName: IPlantCommonName): Observable<EntityResponseType> {
        return this.http.post<IPlantCommonName>(this.resourceUrl, plantCommonName, { observe: 'response' });
    }

    update(plantCommonName: IPlantCommonName): Observable<EntityResponseType> {
        return this.http.put<IPlantCommonName>(this.resourceUrl, plantCommonName, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IPlantCommonName>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IPlantCommonName[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
