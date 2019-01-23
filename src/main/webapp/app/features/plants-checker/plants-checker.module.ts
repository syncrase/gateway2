import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlantsCheckerComponent } from './plants-checker.component';
import { plantsCheckerRoutes } from './';

// import { Gateway2SharedModule } from 'app/shared';

@NgModule({
    declarations: [PlantsCheckerComponent],
    imports: [
        CommonModule,
        // Gateway2SharedModule,
        RouterModule.forChild(plantsCheckerRoutes)
    ]
})
export class PlantsCheckerModule {}
