import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    LivreComponent,
    LivreDetailComponent,
    LivreUpdateComponent,
    LivreDeletePopupComponent,
    LivreDeleteDialogComponent,
    livreRoute,
    livrePopupRoute
} from './';

const ENTITY_STATES = [...livreRoute, ...livrePopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [LivreComponent, LivreDetailComponent, LivreUpdateComponent, LivreDeleteDialogComponent, LivreDeletePopupComponent],
    entryComponents: [LivreComponent, LivreUpdateComponent, LivreDeleteDialogComponent, LivreDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2LivreModule {}
