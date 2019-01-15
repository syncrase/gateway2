import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    RichesseSolComponent,
    RichesseSolDetailComponent,
    RichesseSolUpdateComponent,
    RichesseSolDeletePopupComponent,
    RichesseSolDeleteDialogComponent,
    richesseSolRoute,
    richesseSolPopupRoute
} from './';

const ENTITY_STATES = [...richesseSolRoute, ...richesseSolPopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        RichesseSolComponent,
        RichesseSolDetailComponent,
        RichesseSolUpdateComponent,
        RichesseSolDeleteDialogComponent,
        RichesseSolDeletePopupComponent
    ],
    entryComponents: [RichesseSolComponent, RichesseSolUpdateComponent, RichesseSolDeleteDialogComponent, RichesseSolDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2RichesseSolModule {}
