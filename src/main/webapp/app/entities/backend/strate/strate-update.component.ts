import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IStrate } from 'app/shared/model/backend/strate.model';
import { StrateService } from './strate.service';

@Component({
    selector: 'jhi-strate-update',
    templateUrl: './strate-update.component.html'
})
export class StrateUpdateComponent implements OnInit {
    strate: IStrate;
    isSaving: boolean;

    constructor(protected strateService: StrateService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ strate }) => {
            this.strate = strate;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.strate.id !== undefined) {
            this.subscribeToSaveResponse(this.strateService.update(this.strate));
        } else {
            this.subscribeToSaveResponse(this.strateService.create(this.strate));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IStrate>>) {
        result.subscribe((res: HttpResponse<IStrate>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
