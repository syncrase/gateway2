import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    MoisComponent,
    MoisDetailComponent,
    MoisUpdateComponent,
    MoisDeletePopupComponent,
    MoisDeleteDialogComponent,
    moisRoute,
    moisPopupRoute
} from './';

const ENTITY_STATES = [...moisRoute, ...moisPopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [MoisComponent, MoisDetailComponent, MoisUpdateComponent, MoisDeleteDialogComponent, MoisDeletePopupComponent],
    entryComponents: [MoisComponent, MoisUpdateComponent, MoisDeleteDialogComponent, MoisDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2MoisModule {}
