import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IEnsoleillement } from 'app/shared/model/backend/ensoleillement.model';
import { EnsoleillementService } from './ensoleillement.service';

@Component({
    selector: 'jhi-ensoleillement-update',
    templateUrl: './ensoleillement-update.component.html'
})
export class EnsoleillementUpdateComponent implements OnInit {
    ensoleillement: IEnsoleillement;
    isSaving: boolean;

    constructor(protected ensoleillementService: EnsoleillementService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ ensoleillement }) => {
            this.ensoleillement = ensoleillement;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.ensoleillement.id !== undefined) {
            this.subscribeToSaveResponse(this.ensoleillementService.update(this.ensoleillement));
        } else {
            this.subscribeToSaveResponse(this.ensoleillementService.create(this.ensoleillement));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IEnsoleillement>>) {
        result.subscribe((res: HttpResponse<IEnsoleillement>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
