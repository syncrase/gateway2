import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    PageWebComponent,
    PageWebDetailComponent,
    PageWebUpdateComponent,
    PageWebDeletePopupComponent,
    PageWebDeleteDialogComponent,
    pageWebRoute,
    pageWebPopupRoute
} from './';

const ENTITY_STATES = [...pageWebRoute, ...pageWebPopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PageWebComponent,
        PageWebDetailComponent,
        PageWebUpdateComponent,
        PageWebDeleteDialogComponent,
        PageWebDeletePopupComponent
    ],
    entryComponents: [PageWebComponent, PageWebUpdateComponent, PageWebDeleteDialogComponent, PageWebDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2PageWebModule {}
