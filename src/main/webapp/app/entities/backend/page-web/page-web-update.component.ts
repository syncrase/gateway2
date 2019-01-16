import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IPageWeb } from 'app/shared/model/backend/page-web.model';
import { PageWebService } from './page-web.service';
import { IReference } from 'app/shared/model/backend/reference.model';
import { ReferenceService } from 'app/entities/backend/reference';

@Component({
    selector: 'jhi-page-web-update',
    templateUrl: './page-web-update.component.html'
})
export class PageWebUpdateComponent implements OnInit {
    pageWeb: IPageWeb;
    isSaving: boolean;

    references: IReference[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected pageWebService: PageWebService,
        protected referenceService: ReferenceService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ pageWeb }) => {
            this.pageWeb = pageWeb;
        });
        this.referenceService.query().subscribe(
            (res: HttpResponse<IReference[]>) => {
                this.references = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.pageWeb.id !== undefined) {
            this.subscribeToSaveResponse(this.pageWebService.update(this.pageWeb));
        } else {
            this.subscribeToSaveResponse(this.pageWebService.create(this.pageWeb));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IPageWeb>>) {
        result.subscribe((res: HttpResponse<IPageWeb>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }

    protected onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackReferenceById(index: number, item: IReference) {
        return item.id;
    }
}
