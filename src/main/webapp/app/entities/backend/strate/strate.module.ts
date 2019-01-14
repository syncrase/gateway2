import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    StrateComponent,
    StrateDetailComponent,
    StrateUpdateComponent,
    StrateDeletePopupComponent,
    StrateDeleteDialogComponent,
    strateRoute,
    stratePopupRoute
} from './';

const ENTITY_STATES = [...strateRoute, ...stratePopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [StrateComponent, StrateDetailComponent, StrateUpdateComponent, StrateDeleteDialogComponent, StrateDeletePopupComponent],
    entryComponents: [StrateComponent, StrateUpdateComponent, StrateDeleteDialogComponent, StrateDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2StrateModule {}
