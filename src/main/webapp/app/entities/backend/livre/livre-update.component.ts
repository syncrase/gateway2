import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { ILivre } from 'app/shared/model/backend/livre.model';
import { LivreService } from './livre.service';
import { IReference } from 'app/shared/model/backend/reference.model';
import { ReferenceService } from 'app/entities/backend/reference';

@Component({
    selector: 'jhi-livre-update',
    templateUrl: './livre-update.component.html'
})
export class LivreUpdateComponent implements OnInit {
    livre: ILivre;
    isSaving: boolean;

    references: IReference[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected livreService: LivreService,
        protected referenceService: ReferenceService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ livre }) => {
            this.livre = livre;
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
        if (this.livre.id !== undefined) {
            this.subscribeToSaveResponse(this.livreService.update(this.livre));
        } else {
            this.subscribeToSaveResponse(this.livreService.create(this.livre));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ILivre>>) {
        result.subscribe((res: HttpResponse<ILivre>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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
