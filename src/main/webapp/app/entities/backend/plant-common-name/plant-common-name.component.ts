import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IPlantCommonName } from 'app/shared/model/backend/plant-common-name.model';
import { AccountService } from 'app/core';
import { PlantCommonNameService } from './plant-common-name.service';

@Component({
    selector: 'jhi-plant-common-name',
    templateUrl: './plant-common-name.component.html'
})
export class PlantCommonNameComponent implements OnInit, OnDestroy {
    plantCommonNames: IPlantCommonName[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected plantCommonNameService: PlantCommonNameService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.plantCommonNameService.query().subscribe(
            (res: HttpResponse<IPlantCommonName[]>) => {
                this.plantCommonNames = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInPlantCommonNames();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IPlantCommonName) {
        return item.id;
    }

    registerChangeInPlantCommonNames() {
        this.eventSubscriber = this.eventManager.subscribe('plantCommonNameListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
