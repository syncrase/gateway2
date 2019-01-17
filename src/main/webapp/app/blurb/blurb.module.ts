import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Gateway2SharedModule } from 'app/shared';
import { BLURB_ROUTE, BlurbComponent } from './';

@NgModule({
    declarations: [BlurbComponent],
    imports: [
        // CommonModule,
        Gateway2SharedModule,
        RouterModule.forChild([BLURB_ROUTE])
    ]
})
export class BlurbModule {}
