import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { IPlante } from 'app/shared/model/backend/plante.model';
import { PlanteService } from './plante.service';
import { IClassificationCronquist } from 'app/shared/model/backend/classification-cronquist.model';
import { ClassificationCronquistService } from 'app/entities/backend/classification-cronquist';
import { IStrate } from 'app/shared/model/backend/strate.model';
import { StrateService } from 'app/entities/backend/strate';
import { IVitesseCroissance } from 'app/shared/model/backend/vitesse-croissance.model';
import { VitesseCroissanceService } from 'app/entities/backend/vitesse-croissance';
import { IEnsoleillement } from 'app/shared/model/backend/ensoleillement.model';
import { EnsoleillementService } from 'app/entities/backend/ensoleillement';
import { IRichesseSol } from 'app/shared/model/backend/richesse-sol.model';
import { RichesseSolService } from 'app/entities/backend/richesse-sol';
import { ITypeTerre } from 'app/shared/model/backend/type-terre.model';
import { TypeTerreService } from 'app/entities/backend/type-terre';
import { ITypeFeuillage } from 'app/shared/model/backend/type-feuillage.model';
import { TypeFeuillageService } from 'app/entities/backend/type-feuillage';
import { ITypeRacine } from 'app/shared/model/backend/type-racine.model';
import { TypeRacineService } from 'app/entities/backend/type-racine';
import { IPlantCommonName } from 'app/shared/model/backend/plant-common-name.model';
import { PlantCommonNameService } from 'app/entities/backend/plant-common-name';

@Component({
    selector: 'jhi-plante-update',
    templateUrl: './plante-update.component.html'
})
export class PlanteUpdateComponent implements OnInit {
    plante: IPlante;
    isSaving: boolean;

    classificationcronquists: IClassificationCronquist[];

    strates: IStrate[];

    vitessecroissances: IVitesseCroissance[];

    ensoleillements: IEnsoleillement[];

    richessesols: IRichesseSol[];

    typeterres: ITypeTerre[];

    typefeuillages: ITypeFeuillage[];

    typeracines: ITypeRacine[];

    plantcommonnames: IPlantCommonName[];

    constructor(
        protected jhiAlertService: JhiAlertService,
        protected planteService: PlanteService,
        protected classificationCronquistService: ClassificationCronquistService,
        protected strateService: StrateService,
        protected vitesseCroissanceService: VitesseCroissanceService,
        protected ensoleillementService: EnsoleillementService,
        protected richesseSolService: RichesseSolService,
        protected typeTerreService: TypeTerreService,
        protected typeFeuillageService: TypeFeuillageService,
        protected typeRacineService: TypeRacineService,
        protected plantCommonNameService: PlantCommonNameService,
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ plante }) => {
            this.plante = plante;
        });
        this.classificationCronquistService.query().subscribe(
            (res: HttpResponse<IClassificationCronquist[]>) => {
                this.classificationcronquists = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.strateService.query().subscribe(
            (res: HttpResponse<IStrate[]>) => {
                this.strates = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.vitesseCroissanceService.query().subscribe(
            (res: HttpResponse<IVitesseCroissance[]>) => {
                this.vitessecroissances = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.ensoleillementService.query().subscribe(
            (res: HttpResponse<IEnsoleillement[]>) => {
                this.ensoleillements = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.richesseSolService.query().subscribe(
            (res: HttpResponse<IRichesseSol[]>) => {
                this.richessesols = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.typeTerreService.query().subscribe(
            (res: HttpResponse<ITypeTerre[]>) => {
                this.typeterres = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.typeFeuillageService.query().subscribe(
            (res: HttpResponse<ITypeFeuillage[]>) => {
                this.typefeuillages = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.typeRacineService.query().subscribe(
            (res: HttpResponse<ITypeRacine[]>) => {
                this.typeracines = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.plantCommonNameService.query().subscribe(
            (res: HttpResponse<IPlantCommonName[]>) => {
                this.plantcommonnames = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.plante.id !== undefined) {
            this.subscribeToSaveResponse(this.planteService.update(this.plante));
        } else {
            this.subscribeToSaveResponse(this.planteService.create(this.plante));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IPlante>>) {
        result.subscribe((res: HttpResponse<IPlante>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
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

    trackClassificationCronquistById(index: number, item: IClassificationCronquist) {
        return item.id;
    }

    trackStrateById(index: number, item: IStrate) {
        return item.id;
    }

    trackVitesseCroissanceById(index: number, item: IVitesseCroissance) {
        return item.id;
    }

    trackEnsoleillementById(index: number, item: IEnsoleillement) {
        return item.id;
    }

    trackRichesseSolById(index: number, item: IRichesseSol) {
        return item.id;
    }

    trackTypeTerreById(index: number, item: ITypeTerre) {
        return item.id;
    }

    trackTypeFeuillageById(index: number, item: ITypeFeuillage) {
        return item.id;
    }

    trackTypeRacineById(index: number, item: ITypeRacine) {
        return item.id;
    }

    trackPlantCommonNameById(index: number, item: IPlantCommonName) {
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
