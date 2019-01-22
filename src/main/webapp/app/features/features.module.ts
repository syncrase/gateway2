import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PlantsCheckerModule as PlantsCheckerFeature } from './plants-checker/plants-checker.module';

@NgModule({
    imports: [PlantsCheckerFeature],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Gateway2FeatureModule {}
