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
        protected activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ plante }) => {
            this.plante = plante;
        });
        this.classificationCronquistService.query({ filter: 'plante-is-null' }).subscribe(
            (res: HttpResponse<IClassificationCronquist[]>) => {
                if (!this.plante.classificationCronquist || !this.plante.classificationCronquist.id) {
                    this.classificationcronquists = res.body;
                } else {
                    this.classificationCronquistService.find(this.plante.classificationCronquist.id).subscribe(
                        (subRes: HttpResponse<IClassificationCronquist>) => {
                            this.classificationcronquists = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.strateService.query({ filter: 'plante-is-null' }).subscribe(
            (res: HttpResponse<IStrate[]>) => {
                if (!this.plante.strate || !this.plante.strate.id) {
                    this.strates = res.body;
                } else {
                    this.strateService.find(this.plante.strate.id).subscribe(
                        (subRes: HttpResponse<IStrate>) => {
                            this.strates = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.vitesseCroissanceService.query({ filter: 'plante-is-null' }).subscribe(
            (res: HttpResponse<IVitesseCroissance[]>) => {
                if (!this.plante.vitesseCroissance || !this.plante.vitesseCroissance.id) {
                    this.vitessecroissances = res.body;
                } else {
                    this.vitesseCroissanceService.find(this.plante.vitesseCroissance.id).subscribe(
                        (subRes: HttpResponse<IVitesseCroissance>) => {
                            this.vitessecroissances = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.ensoleillementService.query({ filter: 'plante-is-null' }).subscribe(
            (res: HttpResponse<IEnsoleillement[]>) => {
                if (!this.plante.ensoleillement || !this.plante.ensoleillement.id) {
                    this.ensoleillements = res.body;
                } else {
                    this.ensoleillementService.find(this.plante.ensoleillement.id).subscribe(
                        (subRes: HttpResponse<IEnsoleillement>) => {
                            this.ensoleillements = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.richesseSolService.query({ filter: 'plante-is-null' }).subscribe(
            (res: HttpResponse<IRichesseSol[]>) => {
                if (!this.plante.richesseSol || !this.plante.richesseSol.id) {
                    this.richessesols = res.body;
                } else {
                    this.richesseSolService.find(this.plante.richesseSol.id).subscribe(
                        (subRes: HttpResponse<IRichesseSol>) => {
                            this.richessesols = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.typeTerreService.query({ filter: 'plante-is-null' }).subscribe(
            (res: HttpResponse<ITypeTerre[]>) => {
                if (!this.plante.typeTerre || !this.plante.typeTerre.id) {
                    this.typeterres = res.body;
                } else {
                    this.typeTerreService.find(this.plante.typeTerre.id).subscribe(
                        (subRes: HttpResponse<ITypeTerre>) => {
                            this.typeterres = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.typeFeuillageService.query({ filter: 'plante-is-null' }).subscribe(
            (res: HttpResponse<ITypeFeuillage[]>) => {
                if (!this.plante.typeFeuillage || !this.plante.typeFeuillage.id) {
                    this.typefeuillages = res.body;
                } else {
                    this.typeFeuillageService.find(this.plante.typeFeuillage.id).subscribe(
                        (subRes: HttpResponse<ITypeFeuillage>) => {
                            this.typefeuillages = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
        this.typeRacineService.query({ filter: 'plante-is-null' }).subscribe(
            (res: HttpResponse<ITypeRacine[]>) => {
                if (!this.plante.typeRacine || !this.plante.typeRacine.id) {
                    this.typeracines = res.body;
                } else {
                    this.typeRacineService.find(this.plante.typeRacine.id).subscribe(
                        (subRes: HttpResponse<ITypeRacine>) => {
                            this.typeracines = [subRes.body].concat(res.body);
                        },
                        (subRes: HttpErrorResponse) => this.onError(subRes.message)
                    );
                }
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
}
