import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IPlantCommonName } from 'app/shared/model/backend/plant-common-name.model';
import { PlantCommonNameService } from './plant-common-name.service';
import { IPlante } from 'app/shared/model/backend/plante.model';
import { PlanteService } from 'app/entities/backend/plante';

@Component({
    selector: 'jhi-plant-common-name-update',
    templateUrl: './plant-common-name-update.component.html'
})
export class PlantCommonNameUpdateComponent implements OnInit {
    plantCommonName: IPlantCommonName;
    isSaving: boolean;

    plantes: IPlante[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected plantCommonNameService: PlantCommonNameService,
        protected planteService: PlanteService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ plantCommonName }) => {
            this.plantCommonName = plantCommonName;
        });
        this.planteService.query().subscribe(
            (res: HttpResponse<IPlante[]>) => {
                this.plantes = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.plantCommonName.id !== undefined) {
            this.subscribeToSaveResponse(this.plantCommonNameService.update(this.plantCommonName));
        } else {
            this.subscribeToSaveResponse(this.plantCommonNameService.create(this.plantCommonName));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IPlantCommonName>>) {
        result.subscribe((res: HttpResponse<IPlantCommonName>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackPlanteById(index: number, item: IPlante) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}
