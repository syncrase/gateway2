import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    TypeTerreComponent,
    TypeTerreDetailComponent,
    TypeTerreUpdateComponent,
    TypeTerreDeletePopupComponent,
    TypeTerreDeleteDialogComponent,
    typeTerreRoute,
    typeTerrePopupRoute
} from './';

const ENTITY_STATES = [...typeTerreRoute, ...typeTerrePopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        TypeTerreComponent,
        TypeTerreDetailComponent,
        TypeTerreUpdateComponent,
        TypeTerreDeleteDialogComponent,
        TypeTerreDeletePopupComponent
    ],
    entryComponents: [TypeTerreComponent, TypeTerreUpdateComponent, TypeTerreDeleteDialogComponent, TypeTerreDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2TypeTerreModule {}
