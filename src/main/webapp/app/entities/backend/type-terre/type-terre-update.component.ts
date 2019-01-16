import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITypeTerre } from 'app/shared/model/backend/type-terre.model';
import { TypeTerreService } from './type-terre.service';

@Component({
    selector: 'jhi-type-terre-update',
    templateUrl: './type-terre-update.component.html'
})
export class TypeTerreUpdateComponent implements OnInit {
    typeTerre: ITypeTerre;
    isSaving: boolean;

    constructor(protected typeTerreService: TypeTerreService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ typeTerre }) => {
            this.typeTerre = typeTerre;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.typeTerre.id !== undefined) {
            this.subscribeToSaveResponse(this.typeTerreService.update(this.typeTerre));
        } else {
            this.subscribeToSaveResponse(this.typeTerreService.create(this.typeTerre));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ITypeTerre>>) {
        result.subscribe((res: HttpResponse<ITypeTerre>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
