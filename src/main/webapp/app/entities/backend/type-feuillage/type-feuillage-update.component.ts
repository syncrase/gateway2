import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITypeFeuillage } from 'app/shared/model/backend/type-feuillage.model';
import { TypeFeuillageService } from './type-feuillage.service';

@Component({
    selector: 'jhi-type-feuillage-update',
    templateUrl: './type-feuillage-update.component.html'
})
export class TypeFeuillageUpdateComponent implements OnInit {
    typeFeuillage: ITypeFeuillage;
    isSaving: boolean;

    constructor(protected typeFeuillageService: TypeFeuillageService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ typeFeuillage }) => {
            this.typeFeuillage = typeFeuillage;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.typeFeuillage.id !== undefined) {
            this.subscribeToSaveResponse(this.typeFeuillageService.update(this.typeFeuillage));
        } else {
            this.subscribeToSaveResponse(this.typeFeuillageService.create(this.typeFeuillage));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ITypeFeuillage>>) {
        result.subscribe((res: HttpResponse<ITypeFeuillage>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
