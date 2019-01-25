import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { JhiPaginationUtil, JhiResolvePagingParams } from 'ng-jhipster';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Livre } from 'app/shared/model/backend/livre.model';
import { LivreService } from './livre.service';
import { LivreComponent } from './livre.component';
import { LivreDetailComponent } from './livre-detail.component';
import { LivreUpdateComponent } from './livre-update.component';
import { LivreDeletePopupComponent } from './livre-delete-dialog.component';
import { ILivre } from 'app/shared/model/backend/livre.model';

@Injectable({ providedIn: 'root' })
export class LivreResolve implements Resolve<ILivre> {
    constructor(private service: LivreService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Livre> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<Livre>) => response.ok),
                map((livre: HttpResponse<Livre>) => livre.body)
            );
        }
        return of(new Livre());
    }
}

export const livreRoute: Routes = [
    {
        path: 'livre',
        component: LivreComponent,
        resolve: {
            pagingParams: JhiResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            defaultSort: 'id,asc',
            pageTitle: 'Livres'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'livre/:id/view',
        component: LivreDetailComponent,
        resolve: {
            livre: LivreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Livres'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'livre/new',
        component: LivreUpdateComponent,
        resolve: {
            livre: LivreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Livres'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'livre/:id/edit',
        component: LivreUpdateComponent,
        resolve: {
            livre: LivreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Livres'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const livrePopupRoute: Routes = [
    {
        path: 'livre/:id/delete',
        component: LivreDeletePopupComponent,
        resolve: {
            livre: LivreResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Livres'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
