import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IMois } from 'app/shared/model/backend/mois.model';
import { MoisService } from './mois.service';

@Component({
    selector: 'jhi-mois-update',
    templateUrl: './mois-update.component.html'
})
export class MoisUpdateComponent implements OnInit {
    mois: IMois;
    isSaving: boolean;

    constructor(protected moisService: MoisService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ mois }) => {
            this.mois = mois;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.mois.id !== undefined) {
            this.subscribeToSaveResponse(this.moisService.update(this.mois));
        } else {
            this.subscribeToSaveResponse(this.moisService.create(this.mois));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IMois>>) {
        result.subscribe((res: HttpResponse<IMois>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
