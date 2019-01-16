import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IVitesseCroissance } from 'app/shared/model/backend/vitesse-croissance.model';
import { VitesseCroissanceService } from './vitesse-croissance.service';

@Component({
    selector: 'jhi-vitesse-croissance-update',
    templateUrl: './vitesse-croissance-update.component.html'
})
export class VitesseCroissanceUpdateComponent implements OnInit {
    vitesseCroissance: IVitesseCroissance;
    isSaving: boolean;

    constructor(protected vitesseCroissanceService: VitesseCroissanceService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ vitesseCroissance }) => {
            this.vitesseCroissance = vitesseCroissance;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.vitesseCroissance.id !== undefined) {
            this.subscribeToSaveResponse(this.vitesseCroissanceService.update(this.vitesseCroissance));
        } else {
            this.subscribeToSaveResponse(this.vitesseCroissanceService.create(this.vitesseCroissance));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IVitesseCroissance>>) {
        result.subscribe((res: HttpResponse<IVitesseCroissance>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
