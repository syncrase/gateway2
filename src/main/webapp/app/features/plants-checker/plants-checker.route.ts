import { Routes } from '@angular/router';
import { PlantsCheckerComponent } from './plants-checker.component';
import { UserRouteAccessService } from 'app/core';

export const plantsCheckerRoutes: Routes = [
    {
        path: 'plants-checker',
        component: PlantsCheckerComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Plante checker'
        },
        canActivate: [UserRouteAccessService]
    }
];
