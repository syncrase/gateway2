import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IPageWeb } from 'app/shared/model/backend/page-web.model';

type EntityResponseType = HttpResponse<IPageWeb>;
type EntityArrayResponseType = HttpResponse<IPageWeb[]>;

@Injectable({ providedIn: 'root' })
export class PageWebService {
    public resourceUrl = SERVER_API_URL + 'backend/api/page-webs';

    constructor(protected http: HttpClient) {}

    create(pageWeb: IPageWeb): Observable<EntityResponseType> {
        return this.http.post<IPageWeb>(this.resourceUrl, pageWeb, { observe: 'response' });
    }

    update(pageWeb: IPageWeb): Observable<EntityResponseType> {
        return this.http.put<IPageWeb>(this.resourceUrl, pageWeb, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IPageWeb>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IPageWeb[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
