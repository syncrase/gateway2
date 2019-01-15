import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    ClassificationCronquistComponent,
    ClassificationCronquistDetailComponent,
    ClassificationCronquistUpdateComponent,
    ClassificationCronquistDeletePopupComponent,
    ClassificationCronquistDeleteDialogComponent,
    classificationCronquistRoute,
    classificationCronquistPopupRoute
} from './';

const ENTITY_STATES = [...classificationCronquistRoute, ...classificationCronquistPopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        ClassificationCronquistComponent,
        ClassificationCronquistDetailComponent,
        ClassificationCronquistUpdateComponent,
        ClassificationCronquistDeleteDialogComponent,
        ClassificationCronquistDeletePopupComponent
    ],
    entryComponents: [
        ClassificationCronquistComponent,
        ClassificationCronquistUpdateComponent,
        ClassificationCronquistDeleteDialogComponent,
        ClassificationCronquistDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2ClassificationCronquistModule {}
