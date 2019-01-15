import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import {
    PlanteComponent,
    PlanteDetailComponent,
    PlanteUpdateComponent,
    PlanteDeletePopupComponent,
    PlanteDeleteDialogComponent,
    planteRoute,
    plantePopupRoute
} from './';

const ENTITY_STATES = [...planteRoute, ...plantePopupRoute];

@NgModule({
    imports: [Gateway2SharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [PlanteComponent, PlanteDetailComponent, PlanteUpdateComponent, PlanteDeleteDialogComponent, PlanteDeletePopupComponent],
    entryComponents: [PlanteComponent, PlanteUpdateComponent, PlanteDeleteDialogComponent, PlanteDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2PlanteModule {}
