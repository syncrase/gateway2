import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IRichesseSol } from 'app/shared/model/backend/richesse-sol.model';
import { RichesseSolService } from './richesse-sol.service';

@Component({
    selector: 'jhi-richesse-sol-update',
    templateUrl: './richesse-sol-update.component.html'
})
export class RichesseSolUpdateComponent implements OnInit {
    richesseSol: IRichesseSol;
    isSaving: boolean;

    constructor(protected richesseSolService: RichesseSolService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ richesseSol }) => {
            this.richesseSol = richesseSol;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.richesseSol.id !== undefined) {
            this.subscribeToSaveResponse(this.richesseSolService.update(this.richesseSol));
        } else {
            this.subscribeToSaveResponse(this.richesseSolService.create(this.richesseSol));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IRichesseSol>>) {
        result.subscribe((res: HttpResponse<IRichesseSol>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
