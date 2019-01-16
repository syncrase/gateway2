import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IPageWeb } from 'app/shared/model/backend/page-web.model';
import { AccountService } from 'app/core';
import { PageWebService } from './page-web.service';

@Component({
    selector: 'jhi-page-web',
    templateUrl: './page-web.component.html'
})
export class PageWebComponent implements OnInit, OnDestroy {
    pageWebs: IPageWeb[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        protected pageWebService: PageWebService,
        protected jhiAlertService: JhiAlertService,
        protected eventManager: JhiEventManager,
        protected accountService: AccountService
    ) {}

    loadAll() {
        this.pageWebService.query().subscribe(
            (res: HttpResponse<IPageWeb[]>) => {
                this.pageWebs = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    ngOnInit() {
        this.loadAll();
        this.accountService.identity().then(account => {
            this.currentAccount = account;
        });
        this.registerChangeInPageWebs();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: IPageWeb) {
        return item.id;
    }

    registerChangeInPageWebs() {
        this.eventSubscriber = this.eventManager.subscribe('pageWebListModification', response => this.loadAll());
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }
}
