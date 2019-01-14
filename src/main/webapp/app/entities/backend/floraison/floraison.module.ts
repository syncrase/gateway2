import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    FloraisonComponent,
    FloraisonDetailComponent,
    FloraisonUpdateComponent,
    FloraisonDeletePopupComponent,
    FloraisonDeleteDialogComponent,
    floraisonRoute,
    floraisonPopupRoute
} from './';

const ENTITY_STATES = [...floraisonRoute, ...floraisonPopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        FloraisonComponent,
        FloraisonDetailComponent,
        FloraisonUpdateComponent,
        FloraisonDeleteDialogComponent,
        FloraisonDeletePopupComponent
    ],
    entryComponents: [FloraisonComponent, FloraisonUpdateComponent, FloraisonDeleteDialogComponent, FloraisonDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2FloraisonModule {}
