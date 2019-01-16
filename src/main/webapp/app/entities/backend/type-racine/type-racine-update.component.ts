import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ITypeRacine } from 'app/shared/model/backend/type-racine.model';
import { TypeRacineService } from './type-racine.service';

@Component({
    selector: 'jhi-type-racine-update',
    templateUrl: './type-racine-update.component.html'
})
export class TypeRacineUpdateComponent implements OnInit {
    typeRacine: ITypeRacine;
    isSaving: boolean;

    constructor(protected typeRacineService: TypeRacineService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ typeRacine }) => {
            this.typeRacine = typeRacine;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.typeRacine.id !== undefined) {
            this.subscribeToSaveResponse(this.typeRacineService.update(this.typeRacine));
        } else {
            this.subscribeToSaveResponse(this.typeRacineService.create(this.typeRacine));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<ITypeRacine>>) {
        result.subscribe((res: HttpResponse<ITypeRacine>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
