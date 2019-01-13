import { NgModule } from '@angular/core';

import { Gateway2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Gateway2SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Gateway2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Gateway2SharedCommonModule {}
