import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PageWeb } from 'app/shared/model/backend/page-web.model';
import { PageWebService } from './page-web.service';
import { PageWebComponent } from './page-web.component';
import { PageWebDetailComponent } from './page-web-detail.component';
import { PageWebUpdateComponent } from './page-web-update.component';
import { PageWebDeletePopupComponent } from './page-web-delete-dialog.component';
import { IPageWeb } from 'app/shared/model/backend/page-web.model';

@Injectable({ providedIn: 'root' })
export class PageWebResolve implements Resolve<IPageWeb> {
    constructor(private service: PageWebService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PageWeb> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<PageWeb>) => response.ok),
                map((pageWeb: HttpResponse<PageWeb>) => pageWeb.body)
            );
        }
        return of(new PageWeb());
    }
}

export const pageWebRoute: Routes = [
    {
        path: 'page-web',
        component: PageWebComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PageWebs'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'page-web/:id/view',
        component: PageWebDetailComponent,
        resolve: {
            pageWeb: PageWebResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PageWebs'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'page-web/new',
        component: PageWebUpdateComponent,
        resolve: {
            pageWeb: PageWebResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PageWebs'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'page-web/:id/edit',
        component: PageWebUpdateComponent,
        resolve: {
            pageWeb: PageWebResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PageWebs'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const pageWebPopupRoute: Routes = [
    {
        path: 'page-web/:id/delete',
        component: PageWebDeletePopupComponent,
        resolve: {
            pageWeb: PageWebResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PageWebs'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
