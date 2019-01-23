import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    PlantCommonNameComponent,
    PlantCommonNameDetailComponent,
    PlantCommonNameUpdateComponent,
    PlantCommonNameDeletePopupComponent,
    PlantCommonNameDeleteDialogComponent,
    plantCommonNameRoute,
    plantCommonNamePopupRoute
} from './';

const ENTITY_STATES = [...plantCommonNameRoute, ...plantCommonNamePopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PlantCommonNameComponent,
        PlantCommonNameDetailComponent,
        PlantCommonNameUpdateComponent,
        PlantCommonNameDeleteDialogComponent,
        PlantCommonNameDeletePopupComponent
    ],
    entryComponents: [
        PlantCommonNameComponent,
        PlantCommonNameUpdateComponent,
        PlantCommonNameDeleteDialogComponent,
        PlantCommonNameDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2PlantCommonNameModule {}
