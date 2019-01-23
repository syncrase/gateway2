import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PlantCommonName } from 'app/shared/model/backend/plant-common-name.model';
import { PlantCommonNameService } from './plant-common-name.service';
import { PlantCommonNameComponent } from './plant-common-name.component';
import { PlantCommonNameDetailComponent } from './plant-common-name-detail.component';
import { PlantCommonNameUpdateComponent } from './plant-common-name-update.component';
import { PlantCommonNameDeletePopupComponent } from './plant-common-name-delete-dialog.component';
import { IPlantCommonName } from 'app/shared/model/backend/plant-common-name.model';

@Injectable({ providedIn: 'root' })
export class PlantCommonNameResolve implements Resolve<IPlantCommonName> {
    constructor(private service: PlantCommonNameService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PlantCommonName> {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(
                filter((response: HttpResponse<PlantCommonName>) => response.ok),
                map((plantCommonName: HttpResponse<PlantCommonName>) => plantCommonName.body)
            );
        }
        return of(new PlantCommonName());
    }
}

export const plantCommonNameRoute: Routes = [
    {
        path: 'plant-common-name',
        component: PlantCommonNameComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PlantCommonNames'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'plant-common-name/:id/view',
        component: PlantCommonNameDetailComponent,
        resolve: {
            plantCommonName: PlantCommonNameResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PlantCommonNames'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'plant-common-name/new',
        component: PlantCommonNameUpdateComponent,
        resolve: {
            plantCommonName: PlantCommonNameResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PlantCommonNames'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'plant-common-name/:id/edit',
        component: PlantCommonNameUpdateComponent,
        resolve: {
            plantCommonName: PlantCommonNameResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PlantCommonNames'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const plantCommonNamePopupRoute: Routes = [
    {
        path: 'plant-common-name/:id/delete',
        component: PlantCommonNameDeletePopupComponent,
        resolve: {
            plantCommonName: PlantCommonNameResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'PlantCommonNames'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
