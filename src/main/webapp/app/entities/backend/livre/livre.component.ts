import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ILivre } from 'app/shared/model/backend/livre.model';
import { AccountService } from 'app/core';
import { LivreService } from './livre.service';

@Component({
    selector: 'jhi-livre',
    templateUrl: './livre.component.html'
})
export class LivreComponent implements OnInit, OnDestroy {
    livres: ILivre[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected livreService: LivreService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.livreService.query().subscribe(
            (res: HttpResponse<ILivre[]>) => {
                this.livres = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInLivres();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: ILivre) {
        return item.id;
    }

    registerChangeInLivres() {
        this.eventSubscriber = this.eventManager.subscribe('livreListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
