import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IReference } from 'app/shared/model/backend/reference.model';
import { AccountService } from 'app/core';
import { ReferenceService } from './reference.service';

@Component({
    selector: 'jhi-reference',
    templateUrl: './reference.component.html'
})
export class ReferenceComponent implements OnInit, OnDestroy {
    references: IReference[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected referenceService: ReferenceService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.referenceService.query().subscribe(
            (res: HttpResponse<IReference[]>) => {
                this.references = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInReferences();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IReference) {
        return item.id;
    }

    registerChangeInReferences() {
        this.eventSubscriber = this.eventManager.subscribe('referenceListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
