import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IReference } from 'app/shared/model/backend/reference.model';
import { ReferenceService } from './reference.service';
import { ILivre } from 'app/shared/model/backend/livre.model';
import { LivreService } from 'app/entities/backend/livre';
import { IPageWeb } from 'app/shared/model/backend/page-web.model';
import { PageWebService } from 'app/entities/backend/page-web';
import { IInteractionPlantePlante } from 'app/shared/model/backend/interaction-plante-plante.model';
import { InteractionPlantePlanteService } from 'app/entities/backend/interaction-plante-plante';

@Component({
    selector: 'jhi-reference-update',
    templateUrl: './reference-update.component.html'
})
export class ReferenceUpdateComponent implements OnInit {
    reference: IReference;
    isSaving: boolean;

    livres: ILivre[];

    pagewebs: IPageWeb[];

    interactionplanteplantes: IInteractionPlantePlante[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected referenceService: ReferenceService,
        protected livreService: LivreService,
        protected pageWebService: PageWebService,
        protected interactionPlantePlanteService: InteractionPlantePlanteService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ reference }) => {
            this.reference = reference;
        });
        this.livreService.query({ 'referenceId.specified': 'false' }).subscribe(
            (res: HttpResponse<ILivre[]>) => {
                if (!this.reference.livreId) {
                    this.livres = res.body;
                } else {
                    this.livreService.find(this.reference.livreId).subscribe(
                        (subRes: HttpResponse<ILivre>) => {
                            this.livres = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.pageWebService.query({ 'referenceId.specified': 'false' }).subscribe(
            (res: HttpResponse<IPageWeb[]>) => {
                if (!this.reference.pageWebId) {
                    this.pagewebs = res.body;
                } else {
                    this.pageWebService.find(this.reference.pageWebId).subscribe(
                        (subRes: HttpResponse<IPageWeb>) => {
                            this.pagewebs = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.interactionPlantePlanteService.query().subscribe(
            (res: HttpResponse<IInteractionPlantePlante[]>) => {
                this.interactionplanteplantes = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.reference.id !== undefined) {
            this.subscribeToSaveResponse(this.referenceService.update(this.reference));
        } else {
            this.subscribeToSaveResponse(this.referenceService.create(this.reference));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IReference>>) {
        result.subscribe((res: HttpResponse<IReference>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackLivreById(index: number, item: ILivre) {
        return item.id;
    }

    trackPageWebById(index: number, item: IPageWeb) {
        return item.id;
    }

    trackInteractionPlantePlanteById(index: number, item: IInteractionPlantePlante) {
        return item.id;
    }
}
