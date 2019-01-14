import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    EspeceComponent,
    EspeceDetailComponent,
    EspeceUpdateComponent,
    EspeceDeletePopupComponent,
    EspeceDeleteDialogComponent,
    especeRoute,
    especePopupRoute
} from './';

const ENTITY_STATES = [...especeRoute, ...especePopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [EspeceComponent, EspeceDetailComponent, EspeceUpdateComponent, EspeceDeleteDialogComponent, EspeceDeletePopupComponent],
    entryComponents: [EspeceComponent, EspeceUpdateComponent, EspeceDeleteDialogComponent, EspeceDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2EspeceModule {}
